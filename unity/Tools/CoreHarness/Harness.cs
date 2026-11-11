using System; using System.IO; using System.Linq; using System.Web.Script.Serialization; using Okienko.Core;
class P { static T L<T>(string f){ return new JavaScriptSerializer(){MaxJsonLength=int.MaxValue}.Deserialize<T>(File.ReadAllText(""+(Environment.GetEnvironmentVariable("OKIENKO_DATA")??"/mnt/project-files/unity/Data/")+""+f)); }
 static int Main(){
  var cal=L<CalendarData>("calendar.json"); var guests=L<GuestsFile>("guests.json").guests;
  Console.WriteLine("guests "+guests.Count+" days "+cal.days.Count);
  int fails=0;
  foreach(var pref in new[]{"wydaj","odmow"}){
   var s=new GameSession(cal,guests); s.NewGame(1); int guard=0,served=0;
   while(s.Phase!=Phase.WeekEnd&&guard++<2000){
    switch(s.Phase){
     case Phase.Delivery: s.OpenWindow(); break;
     case Phase.Window: while(!s.ConversationOver) s.Ask(s.OfferedQuestions()[0].question); s.TurnToStorage(); break;
     case Phase.Search: s.PickTarget(); break;
     case Phase.Decide: var g=s.CurrentGuest; var act=g.decisions.Any(d=>d.action==pref)?pref:g.decisions[0].action; var r=s.Decide(act); served++; s.Continue(r.lastGuestOfDay); break;
     case Phase.Evening: s.CollectMail(); s.EndEvening(); break;
     case Phase.Saturday: s.NextWeek(); break; } }
   bool ok = s.Phase==Phase.WeekEnd && served==cal.days.Sum(d=>d.guests.Count) && s.Save.money==served*cal.payPerGuest-2*cal.rentPerWeek;
   Console.WriteLine(pref+": phase="+s.Phase+" served="+served+" money="+s.Save.money+" "+(ok?"OK":"FAIL")); if(!ok) fails++; }
  // rng vectors
  var vf=L<VF>("rng_vectors.json"); foreach(var v in vf.vectors){ if(SeedHash.Hash(v.seed,v.key)!=v.hash){Console.WriteLine("hash FAIL "+v.key);fails++;continue;} var r=new Mulberry32(v.hash); foreach(var e in v.first) if(Math.Abs(r.Next()-e)>1e-9){Console.WriteLine("rng FAIL "+v.key);fails++;break;} }
  Console.WriteLine("vectors checked "+vf.vectors.Count);
  var c=L<CalendarData>("calendar.json"); var a=DayPlanner.BuildCrate(c,7,"d1_wdowiec","rek",4,4,false); Console.WriteLine("crate "+a.Count+" target0="+a[0].isTarget+" regal="+DayPlanner.BuildCrate(c,7,"d1_wdowiec","rek",4,4,true).Count+" wrongcrate target="+DayPlanner.BuildCrate(c,7,"d1_wdowiec","rek",4,6,false).Any(i=>i.isTarget));
  Console.WriteLine("storm "+DayPlanner.EffectiveLine(c,4,1)+DayPlanner.EffectiveLine(c,11,1)+DayPlanner.EffectiveLine(c,6,2));
  var w=guests.First(x=>x.id=="d1_wdowiec"); var sv=new SaveData(); int n0=DialogueRules.Offer(w,1,sv).Count(o=>o.fromSecret); sv.secrets.Add("d1_prawa_na_wydaniu"); var o2=DialogueRules.Offer(w,1,sv); Console.WriteLine("secretq "+n0+" "+o2.Count+" "+o2.Count(o=>o.fromSecret));
  return fails; }
}
public class Vec{public int seed;public string key;public uint hash;public double[] first;} public class VF{public System.Collections.Generic.List<Vec> vectors;}
