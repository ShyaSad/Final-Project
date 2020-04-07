const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/aaadb', 
{
  useCreateIndex: true,
  useNewUrlParser: true
}
)

const meetingSeed = [
  {
      "name": "Big Book Comes Online",
      "day": "Daily",
      "time": "12:00 AM",
      "link": "https://zoom.us/j/8941936932",
      "phone": "(669) 900-6833",
      "code": "8941936932#",
      "notes": "Meditation and book study. Reading roulette style. Please raise your hand in the chat to read one paragraph , one share.",
      "military": 0
  },
  {
      "name": "The Midnight Group",
      "day": "Daily",
      "time": "12:00 AM",
      "link": "https://zoom.us/j/987270636",
      "phone": "(669) 900-6833",
      "code": "987270636#",
      "notes": "Different Format Nightly (Step, Big Book, Speaker...)",
      "military": 0
  },
  {
      "name": "1am LA Late Night Open",
      "day": "Daily",
      "time": "1:00 AM",
      "link": "https://zoom.us/j/370098074",
      "phone": "",
      "notes": "Open Participation",
      "military": 1
  },
  {
      "name": "2am LA Late Night Open",
      "day": "Daily",
      "time": "2:00 AM",
      "link": "https://zoom.us/j/500669303",
      "phone": "",
      "notes": "Open Participation",
      "military": 2
  },
  {
      "name": "3am LA Late Night Open",
      "day": "Daily",
      "time": "3:00 AM",
      "link": "https://zoom.us/j/785305507",
      "phone": "",
      "notes": "Open Participation",
      "military": 3
  },
  {
      "name": "There is a Solution Zoom Group Los Angeles",
      "day": "Daily",
      "time": "3:00 AM",
      "link": "https://zoom.us/j/798916683",
      "phone": "(720) 707-2699",
      "code": "798916683#",
      "notes": "OPen Meeting of Alcoholics Anonymous",
      "military": 3
  },
  {
      "name": "4am LA Late Night Open",
      "day": "Daily",
      "time": "4:00 AM",
      "link": "https://zoom.us/j/316795186",
      "phone": "",
      "notes": "Open Participation",
      "military": 4
  },
  {
      "name": "5am LA Late Night Open",
      "day": "Daily",
      "time": "5:00 AM",
      "link": "https://zoom.us/j/220102441",
      "phone": "",
      "notes": "Open Participation",
      "military": 5
  },
  {
      "name": "Dunsmore Sunrise Group",
      "day": "Daily",
      "time": "6:00 AM",
      "link": "https://zoom.us/j/2165011110",
      "phone": "",
      "notes": "Open Participation",
      "military": 6
  },
  {
      "name": "185 Attitude Adjustment",
      "day": "Daily",
      "time": "6:15 AM",
      "link": "https://zoom.us/j/780182876",
      "phone": "",
      "notes": "Daily Reflections and Open Participation",
      "military": 6
  },
  {
      "name": "Monrovia Attitude Adjustment",
      "day": "Daily",
      "time": "6:15 AM",
      "link": "https://zoom.us/j/506579020",
      "phone": "(669) 900-6833",
      "code": "506579020#",
      "notes": "Zoom line will open at 6:00am. Non-smoking...or not.",
      "military": 6
  },
  {
      "name": "Pasadena Sunrise AA Groups [Daily]",
      "day": "Daily",
      "time": "6:15 AM",
      "link": "https://zoom.us/j/541832240",
      "phone": "(669) 900-6833",
      "code": "541832240#",
      "notes": "Daily Sun-Sat - 15 min lead, participation. Open meeting, all welcome!",
      "military": 6
  },
  {
      "name": "Attitude Adjustment (South Pasadena) (Mon-Fri)",
      "day": "Daily",
      "time": "6:30 AM",
      "link": "https://zoom.us/j/687505283?pwd=VVdzTTl4N3pxaEVHZFNVODhKU09XUT09",
      "phone": "(720) 707-2699",
      "code": "687505283#\nPassword: 974641#",
      "notes": "Monday - Friday, Daily Readings, Participation",
      "military": 6
  },
  {
      "name": "Hole In The Sky - Spiritual Discussion\n(M-F 6:45am - Sat/Sun 8:00am)",
      "day": "Daily",
      "time": "6:45 AM",
      "link": "https://zoom.us/j/705311870",
      "phone": "(669) 900-6833",
      "code": "705311870#",
      "notes": "Participation - (M-F 6:45am - Sat/Sun 8:00am)",
      "military": 6
  },
  {
      "name": "7am Sun Up Online",
      "day": "Daily",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/101337417?pwd=NFRWYVhONHYwdFBOSmVtSXd6RUtMdz09",
      "phone": "(669) 900-6833",
      "code": "101337417#",
      "notes": "Participation",
      "military": 7
  },
  {
      "name": "Good Morning Malibu (Mon-Fri)",
      "day": "Daily",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/526291596",
      "phone": "(669) 900-9128",
      "code": "526291596#",
      "notes": "Monday-Friday Only. Daily Reflections, 5-min speaker lead then sharing, all welcome",
      "military": 7
  },
  {
      "name": "New Day Dawning",
      "day": "Daily",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/719558005",
      "phone": "(669) 900-6833",
      "code": "719558005#",
      "notes": "Daily Reflections then open sharing, men’s stag",
      "military": 7
  },
  {
      "name": "Winner’s Attitude Adjustment",
      "day": "Daily",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/821573122",
      "phone": "",
      "notes": "10 minute speaker then participation",
      "military": 7
  },
  {
      "name": "Winners Attitude Adjustment",
      "day": "Daily",
      "time": "7:00 AM",
      "link": "https://waacolfax.com/",
      "phone": "",
      "notes": "Open Speaker Meeting, 1 hour",
      "military": 7
  },
  {
      "name": "11th Step Morning Meditation Meeting",
      "day": "Daily",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/258947560",
      "phone": "(669) 900-9128",
      "code": "258947560#",
      "notes": "20min mediation + open share",
      "military": 7
  },
  {
      "name": "Eastsiders Morning Men’s Group (M)",
      "day": "Daily",
      "time": "8:30 AM",
      "link": "https://zoom.us/j/986722362",
      "phone": "",
      "notes": "Speaker + Participation + Meditation. 1 hour.",
      "military": 8
  },
  {
      "name": "Sober Voices",
      "day": "Daily",
      "time": "9:00 AM",
      "link": "Phone Only",
      "phone": "(712) 432-0075",
      "code": "654443#",
      "notes": "This happens every day, virus or no virus!",
      "military": 9
  },
  {
      "name": "Zoom GM 9AM Big Book Study (W)",
      "day": "Daily",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/250324202",
      "phone": "(669) 900-6833",
      "code": "250324202#",
      "notes": "Women and Non-Binary meeting. Participation",
      "military": 9
  },
  {
      "name": "9:30am Mid Morning Relfections",
      "day": "Daily",
      "time": "9:30 AM",
      "link": "https://ZoomAlano.com/",
      "phone": "",
      "notes": "Daily Reflections -",
      "military": 9
  },
  {
      "name": "Mid Morning Reflection (Mon-Fri)",
      "day": "Daily",
      "time": "9:30 AM",
      "link": "https://ZoomAlano.com",
      "phone": "(669) 900-6833",
      "code": "2493237899#",
      "notes": "M-F Daily Reflection (Thursday 12&12)",
      "military": 9
  },
  {
      "name": "Grupo Santo Domingo (Spanish-Speaking)",
      "day": "Daily",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/2573518178",
      "phone": "",
      "notes": "Spanish (from Nicargua)",
      "military": 10
  },
  {
      "name": "Tribeca East West NY/LA",
      "day": "Daily",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/561373578",
      "phone": "(669) 900-9128",
      "code": "561373578#",
      "notes": "Speaker/step/literature you name it!",
      "military": 10
  },
  {
      "name": "Crenshaw Daily Noon Meeting",
      "day": "Daily",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/9973074521",
      "phone": "(669) 900-9128",
      "code": "9973074521#",
      "notes": "Participation",
      "military": 12
  },
  {
      "name": "The Hand Of AA - Noon Meeting",
      "day": "Daily",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/230888618?pwd=THpkRUxaTGVsSGwyVXl4aUlJaVBNZz09",
      "phone": "(669) 900-9128",
      "code": "230888618#\nPassword: elephant",
      "notes": "Speaker & Participation Meeting",
      "military": 12
  },
  {
      "name": "Pathfinders - (Mon-Sat)",
      "day": "Daily",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
      "phone": "",
      "notes": "Monday-Saturday Only.",
      "military": 12
  },
  {
      "name": "PG & Chill After Lunch Daily AA Meeting",
      "day": "Daily",
      "time": "1:00 PM",
      "link": "https://zoom.us/j/802496652",
      "phone": "(669) 900-6833",
      "code": "802496652#",
      "notes": "Open AA Speaker Meeting + Participation",
      "military": 13
  },
  {
      "name": "12 Step Zoom Call",
      "day": "Daily",
      "time": "2:00 PM",
      "link": "https://zoom.us/j/9252658366",
      "phone": "(646) 876-9923",
      "code": "9252658366#",
      "notes": "",
      "military": 14
  },
  {
      "name": "Come one, come all",
      "day": "Daily",
      "time": "3:00 PM",
      "link": "https://zoom.us/j/534461531",
      "phone": "",
      "notes": "Participation meeting",
      "military": 15
  },
  {
      "name": "Covina 5pm Ruff Cut",
      "day": "Daily",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/101337417?pwd=NFRWYVhONHYwdFBOSmVtSXd6RUtMdz09",
      "phone": "",
      "notes": "Leader / Participation",
      "military": 17
  },
  {
      "name": "Spanish-Speaking Meeting",
      "day": "Daily",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/2573518178",
      "phone": "",
      "notes": "Spanish (Nicaragua)",
      "military": 17
  },
  {
      "name": "Women’s Meeting (W)",
      "day": "Daily",
      "time": "5:00 PM",
      "link": "Phone only",
      "phone": "(712) 770-8097",
      "code": "275681#",
      "notes": "Women’s Meeting (Normally takes place every Monday at 5pm.)",
      "military": 17
  },
  {
      "name": "This Too Shall Pass",
      "day": "Daily",
      "time": "5:30 PM",
      "link": "https://zoom.us/j/486776455",
      "phone": "(253) 215-8782",
      "code": "486776455#",
      "notes": "Open Participation",
      "military": 17
  },
  {
      "name": "How it Works Westwood",
      "day": "Daily",
      "time": "5:30 PM",
      "link": "https://zoom.us/j/935462500",
      "phone": "",
      "notes": "Book study & round robin sharing",
      "military": 17
  },
  {
      "name": "Namaste At Home - (Mon-Fri)",
      "day": "Daily",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/491668871",
      "phone": "(301) 715-8592",
      "code": "461668871#",
      "notes": "Monday-Friday Only. 10 Minute Speaker - Participation Meeting",
      "military": 18
  },
  {
      "name": "1 Day At A Time Group",
      "day": "Daily",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/773878425",
      "phone": "(646) 876-9923",
      "code": "773878425",
      "notes": "15 min speaker discussion",
      "military": 19
  },
  {
      "name": "Sober Voices",
      "day": "Daily",
      "time": "7:00 PM",
      "link": "Phone Only",
      "phone": "(712) 432-0075",
      "code": "654443#",
      "notes": "This happens every day!",
      "military": 19
  },
  {
      "name": "Bare Bones",
      "day": "Daily",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/290442863",
      "phone": "(669) 900-6833",
      "code": "290442863#",
      "notes": "Speaker meeting every day. 12 and 12 reading on Wednesdays.",
      "military": 22
  },
  {
      "name": "HP>COVID-19",
      "day": "Daily",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/106218429",
      "phone": "(669) 900-6833",
      "code": "106218429#",
      "notes": "Speaker/Participation (1hr)",
      "military": 22
  },
  {
      "name": "Hollywood Late Night",
      "day": "Daily",
      "time": "11:30 PM",
      "link": "https://zoom.us/j/7863304070",
      "phone": "(669) 900-6833",
      "code": "7863304070#",
      "notes": "Speaker/Participation/Heckling/Rule #62",
      "military": 23
  },
  {
      "name": "5:30am Valley Club Big Book Study",
      "day": "Monday",
      "time": "5:30 AM",
      "link": "https://zoom.us/j/664561304",
      "phone": "",
      "notes": "Big Book Study & Participation",
      "military": 5
  },
  {
      "name": "The Early Show",
      "day": "Monday",
      "time": "6:00 AM",
      "link": "https://zoom.us/j/121338280?pwd=cU0vVDU4djV1ZU9kL0Z6SWpSNXdjUT09",
      "phone": "",
      "notes": "Open meeting M-F, daily reading and sharing from As Bill Sees It",
      "military": 6
  },
  {
      "name": "Attitude Adjustment (Hermosa/SBAC)",
      "day": "Monday",
      "time": "6:45 AM",
      "link": "https://zoom.us/j/995542340",
      "phone": "",
      "notes": "Open, Mixed",
      "military": 6
  },
  {
      "name": "Shivering Denizens",
      "day": "Monday",
      "time": "7:00 AM",
      "link": "Phone Only",
      "phone": "(712) 775-7031",
      "code": "476889603#",
      "notes": "Meeting code: 476-889-603#",
      "military": 7
  },
  {
      "name": "Shivering Denizens 7 AM Mondays Tropical",
      "day": "Monday",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/492925191",
      "phone": "(669) 900-6833",
      "code": "492925191#",
      "notes": "15 min speaker",
      "military": 7
  },
  {
      "name": "Gateway Daily Reflections",
      "day": "Monday",
      "time": "7:15 AM",
      "link": "https://zoom.us/j/376641935",
      "phone": "(669) 900-9128",
      "code": "5059199137#",
      "notes": "15 minute Speaker participation meeting on the day’s Daily Reflection",
      "military": 7
  },
  {
      "name": "Unurban Santa Monica Daily Reflections",
      "day": "Monday",
      "time": "7:15 AM",
      "link": "https://zoom.us/j/388163992",
      "phone": "(669) 900-6833",
      "code": "388163992#",
      "notes": "Speaker/Participation",
      "military": 7
  },
  {
      "name": "Log Cabin Promises Meeting",
      "day": "Monday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/345226082",
      "phone": "(301) 715-8592",
      "code": "345226082#",
      "notes": "Promises meeting",
      "military": 7
  },
  {
      "name": "What It’s Like Now- Hollywood and Gardner",
      "day": "Monday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/813149355",
      "phone": "(720) 707-2699",
      "code": "813149355#",
      "notes": "LGBTQ+, 25min speaker, participation",
      "military": 7
  },
  {
      "name": "Café Tropical 12 & 12, Speaker & Sharing",
      "day": "Monday",
      "time": "8:30 AM",
      "link": "https://zoom.us/j/490314511",
      "phone": "",
      "notes": "1 hour. All read from 12 & 12 (please have your book ready), then 15 min Speaker, then raises hand sharing.",
      "military": 8
  },
  {
      "name": "Alano Club Mtg- Daily Reflections",
      "day": "Monday",
      "time": "8:45 AM",
      "link": "https://zoom.us/j/626796350",
      "phone": "",
      "notes": "15min Speaker followed by Sharing",
      "military": 8
  },
  {
      "name": "Coffee and Resentments",
      "day": "Monday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/6509030970",
      "phone": "",
      "notes": "Speaker + Participation",
      "military": 9
  },
  {
      "name": "Good Morning Participation",
      "day": "Monday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/103609895?pwd=TjlYRlk1ODA4ekhTMnhxaWtCRUJPdz09",
      "phone": "(720) 707-2699",
      "code": "103609895#",
      "notes": "10-15min speaker, participation",
      "military": 9
  },
  {
      "name": "Tribeca East West",
      "day": "Monday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/561373578",
      "phone": "(669) 900-9128",
      "code": "561373578#",
      "notes": "New Yorkers in LA and NYC",
      "military": 10
  },
  {
      "name": "Womens Big Book Study 10am (W)",
      "day": "Monday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/565769991",
      "phone": "(480) 522-0551",
      "code": "565769991#",
      "notes": "Women’s Meeting. Read out of Big Book, Speaker Leads, Participation.",
      "military": 10
  },
  {
      "name": "Century City Lunch Bunch",
      "day": "Monday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/735918827",
      "phone": "(301) 715-8592",
      "code": "735918827#",
      "notes": "15 minute speaker; participation",
      "military": 12
  },
  {
      "name": "Feelings Group - Joslyn Center",
      "day": "Monday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/495349235",
      "phone": "(669) 900-6833",
      "code": "495349235#",
      "notes": "Open meeting focused on sharing on a topic",
      "military": 12
  },
  {
      "name": "Hole In The Sky - AA Big Book Study",
      "day": "Monday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/867060088",
      "phone": "(669) 900-6833",
      "code": "867060088#",
      "notes": "Book Study",
      "military": 12
  },
  {
      "name": "Monday 12x12 St Philips Pasadena",
      "day": "Monday",
      "time": "12:00 PM",
      "link": "http://zoom.us/j/570271499",
      "phone": "(669) 900-9128",
      "code": "570271499#",
      "notes": "Book Study",
      "military": 12
  },
  {
      "name": "Monday Moorpark Speaker Meeting",
      "day": "Monday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/6226590977",
      "phone": "",
      "notes": "10 min leader, 30 min speaker",
      "military": 12
  },
  {
      "name": "Monday Step It Up",
      "day": "Monday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/335848766",
      "phone": "(669) 900-6833",
      "code": "335848766#",
      "notes": "Step Study",
      "military": 12
  },
  {
      "name": "Monday WLA Co-Ed Speaker",
      "day": "Monday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/931031420",
      "phone": "",
      "notes": "Co-ED Speaker Solution Oriented",
      "military": 12
  },
  {
      "name": "Valley Club Long Timer’s Meeting",
      "day": "Monday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/606505709",
      "phone": "(669) 900-9128",
      "code": "606505709#",
      "notes": "Participation - Sharing by Alcoholics with 5 Years of Sobriety or More",
      "military": 12
  },
  {
      "name": "WARG Online Meeting",
      "day": "Monday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/5444707170",
      "phone": "",
      "notes": "Participation / Potentially Book Study",
      "military": 12
  },
  {
      "name": "Joslyn Park Not In Control Group Step Study",
      "day": "Monday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/351932194",
      "phone": "(669) 900-9128",
      "code": "351932194#",
      "notes": "Step study",
      "military": 12
  },
  {
      "name": "Pathfinders 12:30",
      "day": "Monday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
      "phone": "(346) 248-7799",
      "code": "941672314#",
      "notes": "Open Discussion",
      "military": 12
  },
  {
      "name": "Mid Afternoon Madness",
      "day": "Monday",
      "time": "3:00 PM",
      "link": "https://zoom.us/j/240743991",
      "phone": "(669) 900-6833",
      "code": "240743991#",
      "notes": "One hour meeting with a 10 minute speaker and participation from coast to coast. All are welcome.",
      "military": 15
  },
  {
      "name": "Ladies Way of Life Open Step Meeting",
      "day": "Monday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/881559374?pwd=ZkFOVDIwT215dFdBSUhtaUVvQjU5QT09",
      "phone": "(312) 626-6799",
      "code": "881559374#",
      "notes": "Women’s Open Step",
      "military": 17
  },
  {
      "name": "Monday Monday Book Study",
      "day": "Monday",
      "time": "5:30 PM",
      "link": "https://zoom.us/j/5814051781",
      "phone": "(166) 990-06833",
      "code": "5814051781#",
      "notes": "Book Study, Participation",
      "military": 17
  },
  {
      "name": "Monday Night Marina Center Women’s Meeting (W)",
      "day": "Monday",
      "time": "5:30 PM",
      "link": "https://bluejeans.com/462507690",
      "phone": "",
      "notes": "Big Book meeting, Women",
      "military": 17
  },
  {
      "name": "Problems abs Solutions Men’s Stag",
      "day": "Monday",
      "time": "5:30 PM",
      "link": "https://zoom.us/j/450357328",
      "phone": "(669) 900-6833",
      "code": "450357328#",
      "notes": "Men’s Meeting",
      "military": 17
  },
  {
      "name": "12 and 12 Group",
      "day": "Monday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/8075993894",
      "phone": "",
      "notes": "LGBTQA 1 hour/Select page from ",
      "military": 18
  },
  {
      "name": "15 minute speaker followed by participation.\"",
      "day": "",
      "time": "",
      "link": "",
      "phone": "",
      "notes": "",
      "military": -12
  },
  {
      "name": "AA Happy Hour Meeting (Melrose & Mansfield)",
      "day": "Monday",
      "time": "6:00 PM",
      "link": "https://BrightHeartHealth.zoom.us/j/6388890741",
      "phone": "(669) 900-6833",
      "code": "6388890741#",
      "notes": "Meeting code: 638 889 0741",
      "military": 18
  },
  {
      "name": "AT Center Monday Night 6 PM Newcomers Meeting",
      "day": "Monday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/866130999?pwd=V1R5T2tBYzRHdmgrTFhUam5VQ3d3UT09",
      "phone": "(669) 900-9128",
      "code": "866130999#",
      "notes": "1 Hour ish",
      "military": 18
  },
  {
      "name": "Balancing Act",
      "day": "Monday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/914562034",
      "phone": "",
      "notes": "15min speaker",
      "military": 18
  },
  {
      "name": "Friends of Brian - Men’s Stag",
      "day": "Monday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/225696773",
      "phone": "",
      "notes": "Men’s Meeting",
      "military": 18
  },
  {
      "name": "Hole In The Sky - Men’s Stag (M)",
      "day": "Monday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/178832291",
      "phone": "(669) 900-6833",
      "code": "178832291#",
      "notes": "Men’s Stag, Participation",
      "military": 18
  },
  {
      "name": "How It Works At Home",
      "day": "Monday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/238603942",
      "phone": "(166) 990-09128",
      "code": "238603942#",
      "notes": "1 hour speaker participation meeting",
      "military": 18
  },
  {
      "name": "Life After 10",
      "day": "Monday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/8401268690",
      "phone": "(669) 900-6833",
      "code": "8401268690#",
      "notes": "",
      "military": 18
  },
  {
      "name": "Men’s Cross talk- Burbank Group",
      "day": "Monday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "1 hour Mens meeting unless otherwise stated",
      "military": 18
  },
  {
      "name": "Valley Club Women’s Meeting - Monday (W)",
      "day": "Monday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/752184443",
      "phone": "",
      "notes": "Open 1 hour Women’s Meeting. Leader / Participation. Secretaries: Annie P. / Rose B.",
      "military": 18
  },
  {
      "name": "WestWing Women (W)",
      "day": "Monday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/182982885",
      "phone": "",
      "notes": "Women’s Meeting, 10 minute speaker, sharing by show of hands",
      "military": 18
  },
  {
      "name": "Third of July",
      "day": "Monday",
      "time": "6:15 PM",
      "link": "https://zoom.us/j/511801021",
      "phone": "(669) 900-6833",
      "code": "511801021#",
      "notes": "Speaker/Participation",
      "military": 18
  },
  {
      "name": "It’s Come to This Book Study (Hollywood LGBT Center)",
      "day": "Monday",
      "time": "6:15 PM",
      "link": "https://zoom.us/j/8155607901",
      "phone": "",
      "notes": "LGBT+, Book study, participation",
      "military": 18
  },
  {
      "name": "Godshots 12 & 12 Candlelight",
      "day": "Monday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/627636001",
      "phone": "(669) 900-6833",
      "code": "627636001#",
      "notes": "Closed, Speaker, 12 Steps & 12 Traditions",
      "military": 18
  },
  {
      "name": "Adventures in Sobriety",
      "day": "Monday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/618599751",
      "phone": "(669) 900-9128",
      "code": "618599751#",
      "notes": "Speaker + Participation",
      "military": 19
  },
  {
      "name": "Monday Night PG & Chill",
      "day": "Monday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/802496652",
      "phone": "(166) 990-06833",
      "code": "802496652",
      "notes": "Open AA Meeting Speaker + Particpation",
      "military": 19
  },
  {
      "name": "As Bill Sees It Glenkirk",
      "day": "Monday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/954885601",
      "phone": "",
      "notes": "As Bill Sees it 10 minute speaker",
      "military": 19
  },
  {
      "name": "BYOB Monday Camden Beverly Hills",
      "day": "Monday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/559990368",
      "phone": "(669) 900-9128",
      "code": "559990368#",
      "notes": "",
      "military": 19
  },
  {
      "name": "Sobriety Together",
      "day": "Monday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/451395134",
      "phone": "(669) 900-9128",
      "code": "451395134#",
      "notes": "Open Topic Discussion",
      "military": 19
  },
  {
      "name": "We Are Not Saints Monday Women’s Meeting (W)",
      "day": "Monday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/815530174",
      "phone": "(669) 900-6833",
      "code": "815530174#",
      "notes": "Women’s Meeting, 10min speaker",
      "military": 19
  },
  {
      "name": "Miracle Mondays (Melrose & Mansfield)",
      "day": "Monday",
      "time": "7:15 PM",
      "link": "https://zoom.us/j/296722399",
      "phone": "(669) 900-6833",
      "code": "296722399#",
      "notes": "",
      "military": 19
  },
  {
      "name": "66 W. Duarte Road Monday Night Speaker",
      "day": "Monday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/768129948",
      "phone": "(669) 900-6833",
      "code": "768129948#",
      "notes": "40 minute speaker meeting.",
      "military": 19
  },
  {
      "name": "Anything Goes",
      "day": "Monday",
      "time": "7:30 PM",
      "link": "https://nuorder.zoom.us/j/2434298005",
      "phone": "",
      "notes": "Open Meeting; Discussion/15-20 Min Speaker",
      "military": 19
  },
  {
      "name": "Monday Night Big Book Study",
      "day": "Monday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/2772989071",
      "phone": "(669) 900-6833",
      "code": "2772989071#",
      "notes": "Closed Big Book & 12/12 Study - Text or Call Molly if needing help 323-497-7978",
      "military": 19
  },
  {
      "name": "Monday Night Lack of Dilemma Group (Dogpark Meeting)",
      "day": "Monday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/4115523942",
      "phone": "",
      "notes": "(Dogpark Meeting)",
      "military": 19
  },
  {
      "name": "West LA 12 Step Study Group",
      "day": "Monday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/6660676860",
      "phone": "(166) 990-09128",
      "code": "6660676860#",
      "notes": "Step Study, Speaker, Participation",
      "military": 19
  },
  {
      "name": "Writing in Sobriety, Pacific Palisades",
      "day": "Monday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/424359415?pwd=WlFaODBXQXNoaHFXUEwxRkVNN1BSdz09",
      "phone": "(166) 990-09128",
      "code": "424359415# US",
      "notes": "Closed meeting, 15 to 20 min speaker, participation for creatives to share in a safe space",
      "military": 19
  },
  {
      "name": "Monday Night Ohio",
      "day": "Monday",
      "time": "7:50 PM",
      "link": "https://zoom.us/j/802496652",
      "phone": "(669) 900-6833",
      "code": "802496652#",
      "notes": "AA Speaker Meeting + Participation",
      "military": 19
  },
  {
      "name": "God, Women, and Money (Men’s Meeting)",
      "day": "Monday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/555751179",
      "phone": "1-669-900-9128",
      "code": "555751179#",
      "notes": "Silver Lake - Men’s Meeting Speaker Participation",
      "military": 20
  },
  {
      "name": "Home Group Speaker Meeting",
      "day": "Monday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/903365714",
      "phone": "(408) 638-0968",
      "code": "903365714#",
      "notes": "90 +/- minute speaker meeting",
      "military": 20
  },
  {
      "name": "Language Of The Heart (W)",
      "day": "Monday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/177466392",
      "phone": "(669) 900-6833",
      "code": "177466392#",
      "notes": "Women’s Meeting",
      "military": 20
  },
  {
      "name": "Monday Alvarado / Echo Park AA",
      "day": "Monday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/407791695",
      "phone": "(669) 900-6833",
      "code": "407791695#",
      "notes": "Open meeting - 15min Speaker / Participation",
      "military": 20
  },
  {
      "name": "Monday Brunswick Participation",
      "day": "Monday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/311400810?pwd=TE9HMjRLdUdROUNxd2pucmFCVis2UT09",
      "phone": "(408) 638-0968",
      "code": "311400810#\nMeeting password: 137377",
      "notes": "Meeting password: 137377",
      "military": 20
  },
  {
      "name": "Monday Madness-Burbank Group",
      "day": "Monday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Open participation meeting.. 1 hour, unless stated longer",
      "military": 20
  },
  {
      "name": "ORG Speaker",
      "day": "Monday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/442211074",
      "phone": "",
      "notes": "",
      "military": 20
  },
  {
      "name": "The Week That Was Men’s Stag",
      "day": "Monday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/163911406",
      "phone": "(619) 900-6833",
      "code": "163911406#",
      "notes": "Men only, 1.5 hours, speaker, participation",
      "military": 20
  },
  {
      "name": "Wobblies (M)",
      "day": "Monday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/876785173",
      "phone": "",
      "notes": "Men’s meeting, Open, 15 min lead, tag participation",
      "military": 20
  },
  {
      "name": "Solutions in the 12x12",
      "day": "Monday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/575478602?pwd=ck5pWDAzZjhnc2c1clB2cFdCYUI5dz09",
      "phone": "(166) 990-06833",
      "code": "575478602#",
      "notes": "12 and 12 meeting",
      "military": 20
  },
  {
      "name": "Weekly Reprieve (AT Center)",
      "day": "Monday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/333794935",
      "phone": "Meeting ID 333794935",
      "notes": "Non Binary/trans/women’s meeting\nusually in Unity Room at AT Center",
      "military": 20
  },
  {
      "name": "Monday Night Mumblers (South Pasadena)",
      "day": "Monday",
      "time": "8:15 PM",
      "link": "https://aa24x7.com",
      "phone": "(669) 900-6833",
      "code": "5042974103#",
      "notes": "AA24x7.com can help other meetings get online (without the 40 minute limit and avoid other restrictions)",
      "military": 20
  },
  {
      "name": "Night Light Women’s Stag (W)",
      "day": "Monday",
      "time": "8:30 PM",
      "link": "https://zoom.us/j/634220479",
      "phone": "",
      "notes": "Women’s Meeting, 10min speaker, participation",
      "military": 20
  },
  {
      "name": "Powerless Group IV",
      "day": "Monday",
      "time": "8:30 PM",
      "link": "https://zoom.us/j/999438467",
      "phone": "(669) 900-9128",
      "code": "999438467#",
      "notes": "mixed meeting, 15min speaker on As Bill Sees It, voluntary participation",
      "military": 20
  },
  {
      "name": "Candlelight - Burbank Group",
      "day": "Monday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "open meeting.. 1 hour unless stated",
      "military": 22
  },
  {
      "name": "Principles Before Pandemic - Late Night",
      "day": "Monday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/230937550",
      "phone": "(408) 638-0968",
      "code": "230937550#",
      "notes": "Reading from As Bill Sees It, 10 Min Speaker + Participation",
      "military": 22
  },
  {
      "name": "5:30am Valley Club Big Book Passage",
      "day": "Tuesday",
      "time": "5:30 AM",
      "link": "https://zoom.us/j/664561304",
      "phone": "",
      "notes": "Leader brings passage of Big Book making that the meeting’s topic",
      "military": 5
  },
  {
      "name": "The Early Show",
      "day": "Tuesday",
      "time": "6:00 AM",
      "link": "https://zoom.us/j/121338280?pwd=cU0vVDU4djV1ZU9kL0Z6SWpSNXdjUT09",
      "phone": "",
      "notes": "Open meeting M-F, daily reading and sharing from As Bill Sees It",
      "military": 6
  },
  {
      "name": "Attitude Adjustment (Hermosa/SBAC)",
      "day": "Tuesday",
      "time": "6:45 AM",
      "link": "https://zoom.us/j/928137020",
      "phone": "",
      "notes": "Open, Mixed, Participation",
      "military": 6
  },
  {
      "name": "The Shivering Denizens Big Book Meeting",
      "day": "Tuesday",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/766444383?pwd=OUkrU0pSQ2F5eDlIVy95TXVVbTNHUT09",
      "phone": "(669) 900-9128",
      "code": "766444383#\nPassword: 048562",
      "notes": "Meeting code: 766 444 383 Password: 048562",
      "military": 7
  },
  {
      "name": "Sobriety 101",
      "day": "Tuesday",
      "time": "7:15 AM",
      "link": "https://zoom.us/j/8998235722",
      "phone": "",
      "notes": "Open, Speaker, Discussion",
      "military": 7
  },
  {
      "name": "Unurban Santa Monica Big Book",
      "day": "Tuesday",
      "time": "7:15 AM",
      "link": "https://zoom.us/j/388163992",
      "phone": "(669) 900-6833",
      "code": "388163992#",
      "notes": "Speaker/Participation",
      "military": 7
  },
  {
      "name": "Hollywood & Gardner 12x 12 Virtual",
      "day": "Tuesday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/394490468",
      "phone": "(669) 900-9128",
      "code": "394490468#",
      "notes": "LGBTQ+ 12 Steps & 12 Traditions Book Meeting",
      "military": 7
  },
  {
      "name": "WHRC Step Time Tuesday",
      "day": "Tuesday",
      "time": "7:45 AM",
      "link": "https://zoom.us/j/4579623132",
      "phone": "(669) 900-9128",
      "code": "4579623132#",
      "notes": "Speaker 12 and 12 participation meeting",
      "military": 7
  },
  {
      "name": "Good Morning Big Book Discussion Meeting of Alcoholics Anonymous",
      "day": "Tuesday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/350913144",
      "phone": "(669) 900-9128",
      "code": "350913144#",
      "notes": "5min Reading from Big Book, 15min speaker, participation",
      "military": 9
  },
  {
      "name": "Growing Into Ladies (W)",
      "day": "Tuesday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/285617644?pwd=QlNMeGlTR1NyRVFIQzRLY3hoZk9UQT09",
      "phone": "",
      "notes": "Women’s Meeting. Speaker + Participation.",
      "military": 9
  },
  {
      "name": "Women Seeking Serenity",
      "day": "Tuesday",
      "time": "9:30 AM",
      "link": "https://zoom.us/j/4358362050",
      "phone": "",
      "notes": "Women, 3 min Meditation, 5 min Speaker, Open Participation",
      "military": 9
  },
  {
      "name": "One Day At A Time BH Women’s Meeting (W)",
      "day": "Tuesday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/228624710",
      "phone": "(669) 900-9128",
      "code": "228624710#",
      "notes": "Women’s meeting. Speaker + Discussion.",
      "military": 10
  },
  {
      "name": "LIVING IN THE SOLUTION Women’s 12&12 (W)",
      "day": "Tuesday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/657489263?pwd=eXpiVE94MUp5T20yUTBvQVpySjlrZz09",
      "phone": "",
      "notes": "Dumetz Women’s 12&12 Literature Study, leader, participation",
      "military": 10
  },
  {
      "name": "Broad Highway Noon Yosemite Meeting",
      "day": "Tuesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/858791214",
      "phone": "",
      "notes": "10min Speaker + Participation",
      "military": 12
  },
  {
      "name": "Century City Lunch Bunch",
      "day": "Tuesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/465543041",
      "phone": "",
      "notes": "Step Study",
      "military": 12
  },
  {
      "name": "Drunk Collection",
      "day": "Tuesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/2348822873",
      "phone": "(669) 900-6833",
      "code": "2348822873#",
      "notes": "Big Book Study-short 40 min",
      "military": 12
  },
  {
      "name": "Hole In The Sky - 12&12 Book Study",
      "day": "Tuesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/295712428",
      "phone": "(669) 900-6833",
      "code": "295712428#",
      "notes": "12&12 book study, participation",
      "military": 12
  },
  {
      "name": "Midday Matinee (Farmers Market)",
      "day": "Tuesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/818339406",
      "phone": "",
      "notes": "Room open at 11:30a for meeting before the meeting",
      "military": 12
  },
  {
      "name": "Rainbow Bar & Grill Sunset Blvd",
      "day": "Tuesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/5178522788",
      "phone": "(669) 900-6833",
      "code": "5178522788#",
      "notes": "20 Min Speaker // Tag Participation",
      "military": 12
  },
  {
      "name": "Tuesday WLA Men’s Stag Speaker Meeting (M)",
      "day": "Tuesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/931031420",
      "phone": "",
      "notes": "Men’s Stag Speaker Meeting - Solution Oriented",
      "military": 12
  },
  {
      "name": "WARG Online Participation Meeting",
      "day": "Tuesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/5444707170",
      "phone": "(669) 900-6833",
      "code": "5444707170#",
      "notes": "15 minute speaker",
      "military": 12
  },
  {
      "name": "Pathfinders 12:30",
      "day": "Tuesday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
      "phone": "(346) 248-7799",
      "code": "941672314#",
      "notes": "Open Discussion",
      "military": 12
  },
  {
      "name": "Tribeca East West",
      "day": "Tuesday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/351932194",
      "phone": "(669) 900-9128",
      "code": "561373578#",
      "notes": "New Yorkers in LA and NYC",
      "military": 12
  },
  {
      "name": "Feel It & Say It",
      "day": "Tuesday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/646405249",
      "phone": "(669) 900-6833",
      "code": "646405249#",
      "notes": "Closed, Women’s meeting, step study, speaker, participation",
      "military": 12
  },
  {
      "name": "Tuesday Midday AA",
      "day": "Tuesday",
      "time": "1:30 PM",
      "link": "https://zoom.us/j/778025060",
      "phone": "",
      "notes": "participation",
      "military": 13
  },
  {
      "name": "The Self-Forgetters (Women’s Meeting)",
      "day": "Tuesday",
      "time": "4:00 PM",
      "link": "https://liveclassroom.zoom.us/j/416206908",
      "phone": "(408) 638-0968",
      "code": "416206908#",
      "notes": "Women’s Meeting, 10 min share, participation based",
      "military": 16
  },
  {
      "name": "11th Step Meditation",
      "day": "Tuesday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/796947868",
      "phone": "(301) 715-8592",
      "code": "796947868#",
      "notes": "11th Step Meditation + Group Sharing",
      "military": 17
  },
  {
      "name": "Big Book Bread and Butter",
      "day": "Tuesday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/976362152?pwd=cnFzN1h0bms2THQ4RldXTTYzVkUydz09",
      "phone": "(669) 900-9128",
      "code": "976362152#",
      "notes": "Joe & Charlie Big Book Comes Alive Audio for 10 minutes followed by a 10 minute speaker.",
      "military": 17
  },
  {
      "name": "One Speaker",
      "day": "Tuesday",
      "time": "5:30 PM",
      "link": "https://zoom.us/s/798123027?pwd=OGM0YTNGdWlZbStpVDFseVNTaTljdz09",
      "phone": "(669) 900-9128",
      "code": "618599751#",
      "notes": "LGBTQ Open meeting",
      "military": 17
  },
  {
      "name": "Women’s After Work Meeting (W)",
      "day": "Tuesday",
      "time": "5:45 PM",
      "link": "https://zoom.us/j/7634469228?pwd=bTZpeFhWSG50aWJzTUtuU3FGeXU3UT09",
      "phone": "Meeting code: 763 446 9228\nPassword: girlpower",
      "notes": "Women’s Meeting Big Book Study",
      "military": 17
  },
  {
      "name": "Arlington Beginners",
      "day": "Tuesday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/898851298",
      "phone": "(669) 900-9128",
      "code": "898851298#",
      "notes": "Oldest active group in Los Angeles! 1 hr/1 speaker Tu/Thu 8pm",
      "military": 18
  },
  {
      "name": "How It Works At Home",
      "day": "Tuesday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/559147996?pwd=QU1DN0xXSGZnS1hIZmhBU3hEY0JPZz09",
      "phone": "(669) 900-9128",
      "code": "559147996#",
      "notes": "1 hour speaker participation meeting",
      "military": 18
  },
  {
      "name": "Three Topic Discussion",
      "day": "Tuesday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/6961815136",
      "phone": "",
      "notes": "Three topic discussion",
      "military": 18
  },
  {
      "name": "Topic Discussion - Burbank Group",
      "day": "Tuesday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "open meeting.. 1 hour.. unless stated otherwise",
      "military": 18
  },
  {
      "name": "Women’s Topic Discussion",
      "day": "Tuesday",
      "time": "6:15 PM",
      "link": "https://zoom.us/j/562932832",
      "phone": "",
      "notes": "Womens Meeting, speaker, topic discussion",
      "military": 18
  },
  {
      "name": "Cliffhangers Step Study Brentwood",
      "day": "Tuesday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/722927811",
      "phone": "(669) 900-6833",
      "code": "722927811#",
      "notes": "Step Study/10 min Speaker/Group Participation",
      "military": 18
  },
  {
      "name": "Tuesday After Work",
      "day": "Tuesday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/402162935",
      "phone": "(669) 900-6833",
      "code": "402162935#",
      "notes": "Open AA meeting, speaker and participation",
      "military": 18
  },
  {
      "name": "Women Working the Steps (W)",
      "day": "Tuesday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/257466393",
      "phone": "(669) 900-9128",
      "code": "257466393#",
      "notes": "Women’s Meeting",
      "military": 18
  },
  {
      "name": "Women’s Step Study",
      "day": "Tuesday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/793636259?pwd=MWN6azhoZUFFZ1daRXdVZXhJSDFBUT09",
      "phone": "(669) 900-6833",
      "code": "793636259#",
      "notes": "Women’s Meeting - Normal physical location is Brunswick in Silverlake",
      "military": 18
  },
  {
      "name": "Sunset Book Study",
      "day": "Tuesday",
      "time": "7:00 PM",
      "link": "https://global.gotomeeting.com/join/854554933",
      "phone": "(954) 415-0006\nMeeting code: 854554933",
      "notes": "Book Study",
      "military": 19
  },
  {
      "name": "Tuesday PG & Chill Book Study",
      "day": "Tuesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/802496652",
      "phone": "(166) 990-06833",
      "code": "802496652",
      "notes": "Open AA Big Book Study + Participation",
      "military": 19
  },
  {
      "name": "BEGINNER’S MEETING",
      "day": "Tuesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/496495411",
      "phone": "",
      "notes": "Speaker until 7:30PM / Participation until 8PM",
      "military": 19
  },
  {
      "name": "Foxy Ladies (W)",
      "day": "Tuesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/9891560774?pwd=VFNFSGhFUEVNRFBjYTB4cXlTc1FnUT09",
      "phone": "(669) 900-6833",
      "code": "9891560774#",
      "notes": "Women’s Meeting. Password: Foxyla",
      "military": 19
  },
  {
      "name": "Japanese Speaking AA Meeting",
      "day": "Tuesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/6402199092",
      "phone": "(301) 715-8592",
      "code": "6402199092#",
      "notes": "Speaker x Participation.",
      "military": 19
  },
  {
      "name": "Santa Monica We Agnostics",
      "day": "Tuesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/7798158542?pwd=aU1NWllJd3VIZEJLRnpPNGZCaHV0UT09",
      "phone": "",
      "notes": "Santa Monica Agnostics Meeting, 15 minute speaker then participation",
      "military": 19
  },
  {
      "name": "Sunset Book Study",
      "day": "Tuesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/128842620?pwd=enBsZUpaZGtkYTBJWitDbVR4aHpKUT09",
      "phone": "(669) 900-6833",
      "code": "128842620#",
      "notes": "Book Study",
      "military": 19
  },
  {
      "name": "12&12 Step Discussion",
      "day": "Tuesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/618598650",
      "phone": "(408) 638-0968",
      "code": "618598650#",
      "notes": "Weekly meeting of Alcoholics Anonymous with a group reading of the 12 Steps and 12 Traditions and participation sharing and a speaker the second Tuesday of the month.",
      "military": 19
  },
  {
      "name": "Burning Desires",
      "day": "Tuesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/984034540",
      "phone": "",
      "notes": "LGBT, Speaker Participation",
      "military": 19
  },
  {
      "name": "Eagle Rock and a Hard Place",
      "day": "Tuesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/469788872",
      "phone": "",
      "notes": "Meditation meeting",
      "military": 19
  },
  {
      "name": "Get Real",
      "day": "Tuesday",
      "time": "7:30 PM",
      "link": "https://nuorder.zoom.us/j/2434298005",
      "phone": "",
      "notes": "Open Meeting; Discussion/15-20 Min Speaker",
      "military": 19
  },
  {
      "name": "Misery Loves Company - AA - Arcadia",
      "day": "Tuesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/695534021",
      "phone": "",
      "notes": "Open Meeting - 20 min leader share then participation - 1 hr 15 minutes",
      "military": 19
  },
  {
      "name": "Shoup Candlelight LGBT",
      "day": "Tuesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/237583048",
      "phone": "(669) 900-6833",
      "code": "237583048#",
      "notes": "Open LGBT speaker/participation",
      "military": 19
  },
  {
      "name": "Tuesday Night Q&A",
      "day": "Tuesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/733238824",
      "phone": "1-669-900-6833",
      "code": "733238824#",
      "notes": "Speaker/Q&A sharing by participants",
      "military": 19
  },
  {
      "name": "Unity Insures Recovery Through Service",
      "day": "Tuesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/9081534155",
      "phone": "(669) 900-6833",
      "code": "9081534155#",
      "notes": "Historical 12 & 12 & 12 Meeting @ St. Alban’s",
      "military": 19
  },
  {
      "name": "Unity Insures Recovery Through Service (580 Hilgard Westwood)",
      "day": "Tuesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/9081534155",
      "phone": "(669) 900-6833",
      "code": "9081534155#",
      "notes": "12&12 speaker meeting with voluntary sharing",
      "military": 19
  },
  {
      "name": "We Agnostics AA - Los Feliz",
      "day": "Tuesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/825502262",
      "phone": "(669) 900-6833",
      "code": "825502262#",
      "notes": "10 min speaker, followed by round robin sharing, 1.5 hour meeting",
      "military": 19
  },
  {
      "name": "We Agnostics AA - Los Feliz",
      "day": "Tuesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/825502262",
      "phone": "(669) 900-6833",
      "code": "825502262#",
      "notes": "10 min speaker, followed by round robin sharing, 1.5 hour meeting",
      "military": 19
  },
  {
      "name": "1401 Olympic Blvd, Santa Monica",
      "day": "Tuesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/9891395775",
      "phone": "(669) 900-9128",
      "code": "9891395775#",
      "notes": "LGBTQ+/Mixed/Open Meeting\n30 minute speaker (1 Hour Meeting)",
      "military": 20
  },
  {
      "name": "creAAtives",
      "day": "Tuesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/530879406?pwd=VlY2MXR2UnU0Z2F1QU9qT2Q4R1FLdz09",
      "phone": "(669) 900-6833",
      "code": "530879406#\nPassword: 652947",
      "notes": "Speaker + Participation",
      "military": 20
  },
  {
      "name": "Open Arms Book Study",
      "day": "Tuesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/661310667",
      "phone": "",
      "notes": "Book Study & Participation",
      "military": 20
  },
  {
      "name": "Tuesday Night Candlelight",
      "day": "Tuesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/195947977",
      "phone": "(166) 990-06833",
      "code": "195947977# Meeting code: 195947977",
      "notes": "15 minute speaker, participation; open meeting",
      "military": 20
  },
  {
      "name": "Tuesday Night Vibe Check Meeting",
      "day": "Tuesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/931191178",
      "phone": "(166) 990-06833",
      "code": "931191178# Meeting code: 931191178",
      "notes": "20 min speaker with participation",
      "military": 20
  },
  {
      "name": "Venice Beach Men’s Stag (M)",
      "day": "Tuesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/3223672492",
      "phone": "(253) 215-8782",
      "code": "3223672492#",
      "notes": "Men’s Stag- 15 min share followed by involuntary sharing.",
      "military": 20
  },
  {
      "name": "Westchester Tuesday Men’s Stag",
      "day": "Tuesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/860803844",
      "phone": "",
      "notes": "Men’s Stag",
      "military": 20
  },
  {
      "name": "Roxbury Park",
      "day": "Tuesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/528973760?pwd=b0NueEJNR0JtWVFvUHRqazYxZmk1Zz09",
      "phone": "",
      "notes": "Open, mixed, participation, 30 min speaker.",
      "military": 20
  },
  {
      "name": "Sobriety Hour at Rose Hill",
      "day": "Tuesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/473349532",
      "phone": "(669) 900-9128",
      "code": "473349532#",
      "notes": "Big Book, Closed, Speaker, Discussion",
      "military": 20
  },
  {
      "name": "Yosemite Group",
      "day": "Tuesday",
      "time": "8:00 PM",
      "link": "https://meet.google.com/qsf-bfvq-eac",
      "phone": "(321) 549-7985\nPIN: ‪327 023 231#‬",
      "notes": "Participation",
      "military": 20
  },
  {
      "name": "Namaste Sober",
      "day": "Tuesday",
      "time": "8:15 PM",
      "link": "https://zoom.us/j/227513287",
      "phone": "",
      "notes": "Yoga and 11th step mediation meeting. 1 hour and 15 minutes.",
      "military": 20
  },
  {
      "name": "Never Had A Legal Drink",
      "day": "Tuesday",
      "time": "8:15 PM",
      "link": "https://zoom.us/j/5232270777",
      "phone": "",
      "notes": "Young People’s",
      "military": 20
  },
  {
      "name": "See You Next Tuesday",
      "day": "Tuesday",
      "time": "8:30 PM",
      "link": "https://zoom.us/j/549916813",
      "phone": "(669) 900-9128",
      "code": "549916813#",
      "notes": "Speaker, Participation",
      "military": 20
  },
  {
      "name": "Chapter 12 Big Book Study",
      "day": "Tuesday",
      "time": "9:00 PM",
      "link": "https://zoom.us/j/428634440",
      "phone": "(669) 900-6833",
      "code": "428634440#",
      "notes": "Big Book Study + participation",
      "military": 21
  },
  {
      "name": "Sunlight of the World Spirit - Speaker/Participation",
      "day": "Tuesday",
      "time": "9:00 PM",
      "link": "https://zoom.us/j/951810083",
      "phone": "(669) 900-6833",
      "code": "951810083#",
      "notes": "Closed Meeting of Alcoholics Anonymous for those who identify as an alcoholic or have the desire to stop drinking.",
      "military": 21
  },
  {
      "name": "Candlelight - Burbank Group",
      "day": "Tuesday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Candlelight.. 1 hour.. unless otherwise stated",
      "military": 22
  },
  {
      "name": "Principles Before Pandemic - Late Night",
      "day": "Tuesday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/230937550",
      "phone": "(408) 638-0968",
      "code": "230937550#",
      "notes": "Reading from As Bill Sees It, 10 min Speaker + Participation",
      "military": 22
  },
  {
      "name": "Radford Hall 10 PM",
      "day": "Tuesday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/142401268?pwd=L1VvMWJyVS9KSmdyeGJ0amF4RHd2Zz09",
      "phone": "(408) 638-0968",
      "code": "142401268#",
      "notes": "Speaker/Participation",
      "military": 22
  },
  {
      "name": "Tuesday Late Night Marina Center",
      "day": "Tuesday",
      "time": "11:00 PM",
      "link": "https://zoom.us/j/354124760",
      "phone": "(166) 990-06833",
      "code": "354124760# Meeting code: 354124760",
      "notes": "15-20 Minute Speaker + Participation / Open Meeting",
      "military": 23
  },
  {
      "name": "5:30am Valley Club 12x12",
      "day": "Wednesday",
      "time": "5:30 AM",
      "link": "https://zoom.us/j/664561304",
      "phone": "",
      "notes": "12 x 12 Step Study",
      "military": 5
  },
  {
      "name": "The Early Show",
      "day": "Wednesday",
      "time": "6:00 AM",
      "link": "https://zoom.us/j/121338280?pwd=cU0vVDU4djV1ZU9kL0Z6SWpSNXdjUT09",
      "phone": "",
      "notes": "Open meeting M-F, daily reading and sharing from As Bill Sees It",
      "military": 6
  },
  {
      "name": "7am Remotely Tropical",
      "day": "Wednesday",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/578392625",
      "phone": "(669) 900-6833",
      "code": "578392625#",
      "notes": "12x12 Book Study",
      "military": 7
  },
  {
      "name": "Unurban Santa Monica Speaker",
      "day": "Wednesday",
      "time": "7:15 AM",
      "link": "https://zoom.us/j/388163992",
      "phone": "(669) 900-6833",
      "code": "388163992#",
      "notes": "Speaker/Participation",
      "military": 7
  },
  {
      "name": "Westside Alano Club Wednesday Morning Speaker",
      "day": "Wednesday",
      "time": "7:15 AM",
      "link": "https://zoom.us/j/551764426?pwd=YzdnRHlYaEJZLzBhKzZhbWhKc21LQT09",
      "phone": "(669) 900-9128",
      "code": "551764426#",
      "notes": "Mixed meeting, 15-20min speaker, participation",
      "military": 7
  },
  {
      "name": "Early Birds",
      "day": "Wednesday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/8597175972",
      "phone": "",
      "notes": "LGBTQ, OPEN, Speaker/sharing",
      "military": 7
  },
  {
      "name": "Hollywood & Gardner Wednesday Morning",
      "day": "Wednesday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/810717138",
      "phone": "(669) 900-9128",
      "code": "810717138#",
      "notes": "LGBTQ+ Decade Day meeting, speaker has more than 10 years of continuous sobriety.",
      "military": 7
  },
  {
      "name": "Logcabin Joy of Living",
      "day": "Wednesday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/784972529",
      "phone": "(253) 215-8782",
      "code": "784972529#",
      "notes": "20 Minute Speaker Participation",
      "military": 7
  },
  {
      "name": "Our Common Welfare (Molly’s)",
      "day": "Wednesday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/999264377",
      "phone": "(669) 900-9128",
      "code": "999264377#",
      "notes": "15min Speaker + Participation",
      "military": 7
  },
  {
      "name": "As Yet Untitled",
      "day": "Wednesday",
      "time": "8:30 AM",
      "link": "https://zoom.us/j/123516953",
      "phone": "(669) 900-6833",
      "code": "123516953#",
      "notes": "15min speaker + participation",
      "military": 8
  },
  {
      "name": "Live & Let Live Book Study (W)",
      "day": "Wednesday",
      "time": "8:30 AM",
      "link": "https://zoom.us/j/6693410519",
      "phone": "(669) 900-6833",
      "code": "6693410519#",
      "notes": "Women’s Meeting",
      "military": 8
  },
  {
      "name": "Progress Not Perfection",
      "day": "Wednesday",
      "time": "8:30 AM",
      "link": "https://zoom.us/j/929836935",
      "phone": "(669) 900-9128",
      "code": "929836935#",
      "notes": "Open meeting. 20 min speaker + participation.",
      "military": 8
  },
  {
      "name": "Solutions in the Steps",
      "day": "Wednesday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/524285583",
      "phone": "",
      "notes": "Speaker and participation",
      "military": 9
  },
  {
      "name": "Eagle Rock Wednesday",
      "day": "Wednesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/320988993",
      "phone": "(669) 900-6833",
      "code": "320988993#",
      "notes": "20 minute meditation followed by open sharing",
      "military": 12
  },
  {
      "name": "Gratitude",
      "day": "Wednesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/9175702384",
      "phone": "",
      "notes": "Speaker, participation",
      "military": 12
  },
  {
      "name": "Hole In The Sky - Living Sober Book Study",
      "day": "Wednesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/295712428",
      "phone": "(669) 900-6833",
      "code": "295712428#",
      "notes": "Book Study",
      "military": 12
  },
  {
      "name": "Sober Sisters (W)",
      "day": "Wednesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/3103831667",
      "phone": "(669) 900-6833",
      "code": "3103831667#",
      "notes": "Women’s Meeting. Speaker + Participation. One hour meeting.",
      "military": 12
  },
  {
      "name": "WARG Newcomers Meeting",
      "day": "Wednesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/5444707170",
      "phone": "(669) 900-6833",
      "code": "5444707170#",
      "notes": "Newcomers Meeting",
      "military": 12
  },
  {
      "name": "Wednesday Moorpark 12&12 Meeting",
      "day": "Wednesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/7765714784",
      "phone": "(669) 900-6833",
      "code": "7765714784#",
      "notes": "12&12 Reading, 15 min speaker, participation",
      "military": 12
  },
  {
      "name": "Wednesday Noon High Powered Sobriety Men’s Meeting",
      "day": "Wednesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/292693719",
      "phone": "",
      "notes": "Men’s Stag, particpation",
      "military": 12
  },
  {
      "name": "Wednesday WLA Co-ED Speaker Meeting",
      "day": "Wednesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/931031420",
      "phone": "",
      "notes": "Co-Ed Speaker Meeting - Solution Oriented",
      "military": 12
  },
  {
      "name": "Whats Happening Now",
      "day": "Wednesday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/275670619",
      "phone": "(669) 900-6833",
      "code": "275670619#",
      "notes": "20 minute Speaker Meeting",
      "military": 12
  },
  {
      "name": "How it Works--Joslyn Park",
      "day": "Wednesday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/912912328",
      "phone": "(669) 900-9128",
      "code": "912912328#",
      "notes": "",
      "military": 12
  },
  {
      "name": "Pathfinders 12:30",
      "day": "Wednesday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
      "phone": "(346) 248-7799",
      "code": "941672314#",
      "notes": "Open Discussion",
      "military": 12
  },
  {
      "name": "Try God/Universal Studios",
      "day": "Wednesday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/630042121",
      "phone": "",
      "notes": "Speaker/participation",
      "military": 12
  },
  {
      "name": "Woman 2 Woman (W)",
      "day": "Wednesday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/798684617?pwd=OG9rai9pMnExQ1ZUNWJWaGpsc1Q2dz09",
      "phone": "(669) 900-9128",
      "code": "798684617#\nPassword: 422612",
      "notes": "Women’s meeting. Phone phone password: 422612",
      "military": 12
  },
  {
      "name": "Big Book Neat Group",
      "day": "Wednesday",
      "time": "3:00 PM",
      "link": "https://zoom.us/j/502755096",
      "phone": "(669) 900-6833",
      "code": "502755096#",
      "notes": "Big Book study",
      "military": 15
  },
  {
      "name": "Mid Afternoon Madness",
      "day": "Wednesday",
      "time": "3:00 PM",
      "link": "https://zoom.us/j/240743991",
      "phone": "(669) 900-6833",
      "code": "240743991#",
      "notes": "One hour meeting with a 10 minute speaker and participation from coast to coast. All are welcome.",
      "military": 15
  },
  {
      "name": "11th Step Focus",
      "day": "Wednesday",
      "time": "5:00 PM",
      "link": "https://liveclassroom.zoom.us/j/146143573",
      "phone": "(166) 990-06833",
      "code": "146143573#",
      "notes": "Meditation for 10 minutes and different prayer topic every week",
      "military": 17
  },
  {
      "name": "El Segundo Women’s Meeting (W)",
      "day": "Wednesday",
      "time": "5:30 PM",
      "link": "https://zoom.us/j/999871990",
      "phone": "",
      "notes": "Women’s Meeting",
      "military": 17
  },
  {
      "name": "In By 5:45, Out By 6:30",
      "day": "Wednesday",
      "time": "5:45 PM",
      "link": "https://zoom.us/j/640622988",
      "phone": "",
      "notes": "45 min meeting",
      "military": 17
  },
  {
      "name": "Beginner’s Workshop - Hole In The Sky",
      "day": "Wednesday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/609275263",
      "phone": "(669) 900-6833",
      "code": "609275263#",
      "notes": "Beginner’s participation meeting",
      "military": 18
  },
  {
      "name": "Big Book Study - Burbank Group",
      "day": "Wednesday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "BB study",
      "military": 18
  },
  {
      "name": "Life After 10",
      "day": "Wednesday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/758877991",
      "phone": "(669) 900-9128",
      "code": "758877991#",
      "notes": "",
      "military": 18
  },
  {
      "name": "Wednesday 12x12",
      "day": "Wednesday",
      "time": "6:00 PM",
      "link": "http://zoom.us/j/337883625",
      "phone": "",
      "notes": "Step and Tradition book study",
      "military": 18
  },
  {
      "name": "Women’s Solutions Westside Alano Club",
      "day": "Wednesday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/2728588136",
      "phone": "",
      "notes": "Women’s AA speaker/participation 90 min Closed",
      "military": 18
  },
  {
      "name": "Quitting Time west hollywood",
      "day": "Wednesday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/5419924562?pwd=Y1E3VE9taGdWd2RHT0ExMm95K1dZZz09",
      "phone": "",
      "notes": "AA 12 step meeting - open meeting",
      "military": 18
  },
  {
      "name": "Acceptance Is The Answer",
      "day": "Wednesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/604052611",
      "phone": "(669) 900-6833",
      "code": "604052611#",
      "notes": "Open meeting, LGBT, 15 min speaker + participation.",
      "military": 19
  },
  {
      "name": "Speakeasy Meeting",
      "day": "Wednesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/711609691",
      "phone": "(669) 900-6833",
      "code": "711609691#",
      "notes": "Young People’s Meeting, Speaker + Open Share",
      "military": 19
  },
  {
      "name": "Balancing Act",
      "day": "Wednesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/914562034",
      "phone": "",
      "notes": "15min speaker",
      "military": 19
  },
  {
      "name": "How It Works Women’s (W)",
      "day": "Wednesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/675575419?pwd=TTQzeUVpTDNmMysrRG9RWStQSnVhUT09",
      "phone": "(669) 900-6833",
      "code": "675575419#",
      "notes": "Closed Women’s Meeting. Pswd: hope",
      "military": 19
  },
  {
      "name": "One Step At A Time",
      "day": "Wednesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/765041825?pwd=cFVwL3VaMUkwVG9QRnRNTkV5REpDUT09",
      "phone": "(669) 900-6833",
      "code": "765041825#",
      "notes": "20 min. Speaker followed by open sharing",
      "military": 19
  },
  {
      "name": "Wed Night 7pm The Solution Meeting (W)",
      "day": "Wednesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/466544854?",
      "phone": "",
      "notes": "Women’s Meeting- The Solution, participation",
      "military": 19
  },
  {
      "name": "Women’s Participation - Sierra Madre (W)",
      "day": "Wednesday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/602217192",
      "phone": "(669) 900-6833",
      "code": "602217192#",
      "notes": "Women’s Meeting, 15 min speaker, participation, 90 mins",
      "military": 19
  },
  {
      "name": "Fun Bunch",
      "day": "Wednesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/988538816",
      "phone": "(301) 715-8592",
      "code": "988538816#\nPassword: 849505",
      "notes": "1.5 hr speaker participation meeting",
      "military": 19
  },
  {
      "name": "No Losers (Rodney & Prospect)",
      "day": "Wednesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/509983319?pwd=d2dCQ2d1czZIRWw0bHJWdm54cjhtZz09",
      "phone": "(720) 707-2699",
      "code": "509983319#\nPassword: 696969",
      "notes": "Speaker until 8pm + tagged sharing",
      "military": 19
  },
  {
      "name": "Solutions East Online Men’s Meeting (M)",
      "day": "Wednesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/924976012",
      "phone": "(669) 900-6833",
      "code": "924976012#",
      "notes": "Men’s Stag",
      "military": 19
  },
  {
      "name": "The Stronghold AA meeting",
      "day": "Wednesday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/826046615",
      "phone": "",
      "notes": "Mixed meeting. 5 min meditation + 20 min share + 20 minute participation.",
      "military": 19
  },
  {
      "name": "Beyond Baroque",
      "day": "Wednesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/746731533",
      "phone": "(166) 990-06833",
      "code": "746731533# Meeting code: 746731533",
      "notes": "Participation, Discussion",
      "military": 20
  },
  {
      "name": "Cover to Cover Big Book Study",
      "day": "Wednesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/7732266890",
      "phone": "",
      "notes": "Book study and sharing",
      "military": 20
  },
  {
      "name": "Hollywood Young People’s Wednesday\nSpeaker/Participation",
      "day": "Wednesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/535284646",
      "phone": "",
      "notes": "1 hour Young Peoples Speaker and participation",
      "military": 20
  },
  {
      "name": "Martel 5",
      "day": "Wednesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/749816498?pwd=dlJ5TFVDcWNlWXhpNlgwd2J4ZmNwUT09",
      "phone": "",
      "notes": "LGBT open meeting",
      "military": 20
  },
  {
      "name": "Rule 62",
      "day": "Wednesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/446816361",
      "phone": "",
      "notes": "Coed meeting, cross talk, speaker discussion",
      "military": 20
  },
  {
      "name": "Second and Hill",
      "day": "Wednesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/422705733",
      "phone": "",
      "notes": "two speaker meeting",
      "military": 20
  },
  {
      "name": "Steps & Traditions Study - Burbank Group",
      "day": "Wednesday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "12 & 12 study",
      "military": 20
  },
  {
      "name": "Highland Park/South Pasadena Legacy",
      "day": "Wednesday",
      "time": "8:15 PM",
      "link": "https://aa24x7.com",
      "phone": "(669) 900-6833 + code: 504 297 4103#",
      "notes": "Speaker+Q&A AA24x7.com can get your meeting online fast and easy-tech probs R gone.",
      "military": 20
  },
  {
      "name": "Principles Before Personalities",
      "day": "Wednesday",
      "time": "8:15 PM",
      "link": "https://zoom.us/j/433375992",
      "phone": "(669) 900-9128",
      "code": "433375992#",
      "notes": "Open, Speaker, Participation ... *Meeting room opens @ 8pm*",
      "military": 20
  },
  {
      "name": "Fight Club Online (Men’s Meeting)",
      "day": "Wednesday",
      "time": "8:30 PM",
      "link": "https://zoom.us/j/337968927",
      "phone": "",
      "notes": "Men’s Meeting. Cross Talk.",
      "military": 20
  },
  {
      "name": "Wednesday Night Candelight at Joslyn Park",
      "day": "Wednesday",
      "time": "8:30 PM",
      "link": "https://zoom.us/j/726415314",
      "phone": "(669) 900-9128",
      "code": "726415314#",
      "notes": "Participation",
      "military": 20
  },
  {
      "name": "Candlelight - Burbank Group",
      "day": "Wednesday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Candlelight 1 hour.. unless stated",
      "military": 22
  },
  {
      "name": "Principles Before Pandemic - Late Night",
      "day": "Wednesday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/230937550",
      "phone": "(408) 638-0968",
      "code": "230937550#",
      "notes": "Reading from As Bill Sees It, 10 min Speaker + Participation",
      "military": 22
  },
  {
      "name": "Quarantine Solutions",
      "day": "Wednesday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/273337177",
      "phone": "(669) 900-6833",
      "code": "273337177#",
      "notes": "Daily Reflections, 15 min speaker + participation",
      "military": 22
  },
  {
      "name": "Wednesday Night Marina Center Late Night",
      "day": "Wednesday",
      "time": "11:00 PM",
      "link": "https://zoom.us/j/295410657",
      "phone": "(669) 900-6833",
      "code": "295410657#",
      "notes": "15-20 Minute Speaker + Participation / Open Meeting",
      "military": 23
  },
  {
      "name": "5:30 Valley Club As Bill Sees It",
      "day": "Thursday",
      "time": "5:30 AM",
      "link": "https://zoom.us/j/664561304",
      "phone": "",
      "notes": "As Bill Sees It Topic + Participation",
      "military": 5
  },
  {
      "name": "The Early Show",
      "day": "Thursday",
      "time": "6:00 AM",
      "link": "https://zoom.us/j/121338280?pwd=cU0vVDU4djV1ZU9kL0Z6SWpSNXdjUT09",
      "phone": "",
      "notes": "Open meeting M-F, daily reading and sharing from As Bill Sees It",
      "military": 6
  },
  {
      "name": "12 & 12 Book Study",
      "day": "Thursday",
      "time": "6:30 AM",
      "link": "https://zoom.us/j/387014776?_ga=2.23329202.907325610.1584476548-1294044596.1563549392",
      "phone": "",
      "notes": "Group chapter reading; shares",
      "military": 6
  },
  {
      "name": "Big Book Study | Tropical (UPDATED)",
      "day": "Thursday",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/337023127",
      "phone": "",
      "notes": "Big Book Study & Participation",
      "military": 7
  },
  {
      "name": "Alano 12/12 715AM Meeting",
      "day": "Thursday",
      "time": "7:15 AM",
      "link": "https://zoom.us/j/969112316",
      "phone": "(669) 900-6833",
      "code": "969112316#",
      "notes": "Read 12 x 12; amended format each person reads a few paragraphs or a page.",
      "military": 7
  },
  {
      "name": "Sobreity 101",
      "day": "Thursday",
      "time": "7:15 AM",
      "link": "https://zoom.us/j/8998235722",
      "phone": "",
      "notes": "Open, speaker and discussion",
      "military": 7
  },
  {
      "name": "Unurban Santa Monica 12 and 12",
      "day": "Thursday",
      "time": "7:15 AM",
      "link": "https://zoom.us/j/388163992",
      "phone": "(669) 900-6833",
      "code": "388163992#",
      "notes": "Speaker/Participation",
      "military": 7
  },
  {
      "name": "Hollywood & Gardner - Big Book Study",
      "day": "Thursday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/562311923",
      "phone": "(669) 900-6833",
      "code": "562311923#",
      "notes": "Cover To Cover Big Book Study, LGBTQ+",
      "military": 7
  },
  {
      "name": "Log(in) Cabin Step and Tradition Thursdays",
      "day": "Thursday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/776382580",
      "phone": "(669) 900-6833",
      "code": "776382580#",
      "notes": "Step & Tradition Meeting, 20min Speaker, participation, 1 Hr.",
      "military": 7
  },
  {
      "name": "Tropical Thursday",
      "day": "Thursday",
      "time": "8:30 AM",
      "link": "https://zoom.us/j/388722570",
      "phone": "(669) 900-6833",
      "code": "388722570#",
      "notes": "15 min speaker, participation",
      "military": 8
  },
  {
      "name": "Thur Women’s Double Winners Courage to Change",
      "day": "Thursday",
      "time": "9:30 AM",
      "link": "https://zoom.us/j/605061780",
      "phone": "(669) 900-6833",
      "code": "605061780#",
      "notes": "Women’s Double Winners AA/Alanon 1 hour read from Courage to Change",
      "military": 9
  },
  {
      "name": "AA Secular Meeting",
      "day": "Thursday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/295712428",
      "phone": "(669) 900-6833",
      "code": "295712428#",
      "notes": "Secular AA meeting",
      "military": 12
  },
  {
      "name": "Century City Lunch Bunch",
      "day": "Thursday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/706016688",
      "phone": "(669) 900-6833",
      "code": "706016688#",
      "notes": "15 minute speaker; participation",
      "military": 12
  },
  {
      "name": "Farmers Mkt Lunch Bunch Big Book",
      "day": "Thursday",
      "time": "12:00 PM",
      "link": "https://zoom.us/3208662276",
      "phone": "",
      "notes": "Big Book Study",
      "military": 12
  },
  {
      "name": "Thursday WLA Men’s Stag Meeting (M)",
      "day": "Thursday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/931031420",
      "phone": "",
      "notes": "Men’s Stag Speaker Meeting - Solution Oriented",
      "military": 12
  },
  {
      "name": "WARG Step Study",
      "day": "Thursday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/5444707170",
      "phone": "(669) 900-6833",
      "code": "5444707170#",
      "notes": "Step Study",
      "military": 12
  },
  {
      "name": "Came to Believe Women’s Meeting",
      "day": "Thursday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/732585775?pwd=ODRTekJlYVZPRFM3QlNKSFJJbVlZQT09",
      "phone": "(669) 900-6833",
      "code": "732585775#\nPassword - 529481",
      "notes": "Women’s meeting",
      "military": 12
  },
  {
      "name": "Pathfinders 12:30",
      "day": "Thursday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
      "phone": "(346) 248-7799",
      "code": "941672314#",
      "notes": "Open Discussion",
      "military": 12
  },
  {
      "name": "Camden Solutions in Sobriety",
      "day": "Thursday",
      "time": "1:00 PM",
      "link": "https://zoom.us/j/2474183320",
      "phone": "(669) 900-9128",
      "code": "2474183320#",
      "notes": "15 min Speaker + Participation",
      "military": 13
  },
  {
      "name": "Happy Joyous And Free",
      "day": "Thursday",
      "time": "3:00 PM",
      "link": "https://zoom.us/j/5306564420",
      "phone": "",
      "notes": "",
      "military": 15
  },
  {
      "name": "On the Waterfront Beginners Joslyn Park",
      "day": "Thursday",
      "time": "5:45 PM",
      "link": "https://zoom.us/j/857081317",
      "phone": "(669) 900-9128",
      "code": "857081317#",
      "notes": "Beginner’s Meeting",
      "military": 17
  },
  {
      "name": "Arlington Beginners",
      "day": "Thursday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/190553987",
      "phone": "(301) 715-8592",
      "code": "190553987#",
      "notes": "Oldest active group in Los Angeles! 1 hr/1 speaker Tu/Thu 8pm",
      "military": 18
  },
  {
      "name": "Coexist Gay Meeting",
      "day": "Thursday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/691017374",
      "phone": "",
      "notes": "LGBTQ+ , but all are welcome. 15min leader, participation.",
      "military": 18
  },
  {
      "name": "Grapevine Meeting",
      "day": "Thursday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/282018390",
      "phone": "(669) 900-6833",
      "code": "282018390#",
      "notes": "AA Grapevine discussion",
      "military": 18
  },
  {
      "name": "Just for Today (W)",
      "day": "Thursday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/362883521",
      "phone": "(301) 715-8592",
      "code": "362883521#",
      "notes": "Women’s meeting, 24 hour a day meditation book, discussion",
      "military": 18
  },
  {
      "name": "Life After Ten Thursday",
      "day": "Thursday",
      "time": "6:00 PM",
      "link": "https://cccconfer.zoom.us/j/186305261",
      "phone": "(669) 900-6833,186305261#",
      "notes": "Sharing is limited to those with over 10 years.",
      "military": 18
  },
  {
      "name": "Playa Vista \"Last Resort\"",
      "day": "Thursday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/255200766",
      "phone": "(301) 715-8592",
      "code": "255200766#",
      "notes": "Closed, Speaker + Involuntary Sharing",
      "military": 18
  },
  {
      "name": "Woodland Hills 12&12 Discussion",
      "day": "Thursday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/7702664727",
      "phone": "(166) 990-06833",
      "code": "7702664727# Meeting code: 770 266 4727",
      "notes": "Participation",
      "military": 18
  },
  {
      "name": "Happy Hour (Hollywood LGBT Center)",
      "day": "Thursday",
      "time": "6:15 PM",
      "link": "https://zoom.us/j/8155607901",
      "phone": "",
      "notes": "LGBT+, 15 min speaker, participation",
      "military": 18
  },
  {
      "name": "EMO SOB",
      "day": "Thursday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/866415552",
      "phone": "(669) 900-9128",
      "code": "866415552#",
      "notes": "Observe a 20 min conversation on Emotional Sobriety.",
      "military": 18
  },
  {
      "name": "There is a Solution Men’s Stag Meeting of AA",
      "day": "Thursday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/140533882?pwd=ZDlveGFRWHZuOFpaS1JUS3BNN0Y4Zz09",
      "phone": "(669) 900-6833",
      "code": "140533882#\nPassword: 590149",
      "notes": "15 minute speaker followed by sharing",
      "military": 18
  },
  {
      "name": "West Hollywood Housekeeping Recovery Meeting",
      "day": "Thursday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/292490242",
      "phone": "(669) 900-6833",
      "code": "292490242#",
      "notes": "Newbies, oldsters, co-ed, gay, straight, short, tall, light, dark, everybody!",
      "military": 18
  },
  {
      "name": "Into Action - Step Study",
      "day": "Thursday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/6386954617",
      "phone": "(669) 900-6833",
      "code": "6386954617#",
      "notes": "1-Hr AA Step Study, 20m speaker, Shares, Log Cabin",
      "military": 18
  },
  {
      "name": "There Is A Solution (M)",
      "day": "Thursday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/727333563",
      "phone": "(669) 900-6833",
      "code": "727333563#",
      "notes": "Closed Mens - 10 minute speaker/participation meeting",
      "military": 19
  },
  {
      "name": "Thursday PG & Chill Key Group",
      "day": "Thursday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/802496652",
      "phone": "(166) 990-06833",
      "code": "802496652",
      "notes": "Open AA Speaker Meeting + Participation",
      "military": 19
  },
  {
      "name": "Brentwood Workshop",
      "day": "Thursday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/890643283",
      "phone": "(166) 990-09128",
      "code": "3105007139#",
      "notes": "Beginners Workshop",
      "military": 19
  },
  {
      "name": "By The Book Step Study",
      "day": "Thursday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/740799516",
      "phone": "(166) 990-06833",
      "code": "740799516#",
      "notes": "Closed meeting, 75 min, Step reading, speaker & share",
      "military": 19
  },
  {
      "name": "Powerless #1",
      "day": "Thursday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/172157389",
      "phone": "(166) 990-09128",
      "code": "172157389#",
      "notes": "As Bill Sees It, 20 min speaker, participation",
      "military": 19
  },
  {
      "name": "Sunset Speaker Meeting",
      "day": "Thursday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/144469443?pwd=S1R3bGhiOFVpNEhqcFF6YzZSTHRBQT09",
      "phone": "(669) 900-6833",
      "code": "144469443#",
      "notes": "Speaker Meeting",
      "military": 19
  },
  {
      "name": "Thursday Night Pathfinders Big Book Study",
      "day": "Thursday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/314441565",
      "phone": "(669) 900-6833",
      "code": "314441565#",
      "notes": "",
      "military": 19
  },
  {
      "name": "(The Bunker) Dangerous Sports Club Men’s Meeting",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/402637198",
      "phone": "1 669 900 6833",
      "code": "402637198 Meeting code: 402 637 198",
      "notes": "Men’s Meeting - Open Participation",
      "military": 19
  },
  {
      "name": "Big Book Study",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/453268620?pwd=MjZvYmtmbllaTjQ1Wk9hMzhVUStVZz09",
      "phone": "(669) 900-6833",
      "code": "453268620#\nPassword: 752901",
      "notes": "Paragraph by paragraph Big Book Study",
      "military": 19
  },
  {
      "name": "Bring Your Own Big Book \"Moorpark\"",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/470479623",
      "phone": "",
      "notes": "Book Study",
      "military": 19
  },
  {
      "name": "Emotional Sobriety",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/9683634877",
      "phone": "(669) 900-6833",
      "code": "9683634877#",
      "notes": "40 minute meeting",
      "military": 19
  },
  {
      "name": "Great Fact People’s Stag",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/833719806",
      "phone": "(669) 900-9128",
      "code": "833719806#",
      "notes": "This is a closed meeting of AA; only those who have a desire to stop drinking may attend.",
      "military": 19
  },
  {
      "name": "Host Of Friends",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/6234511488",
      "phone": "(669) 900-9128",
      "code": "6234511488#",
      "notes": "Speaker, participation",
      "military": 19
  },
  {
      "name": "How Now",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/860869724",
      "phone": "",
      "notes": "Speaker Participation- Las Encinas Hospital",
      "military": 19
  },
  {
      "name": "Just The Black Print",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/310402300",
      "phone": "(669) 900-6833",
      "code": "310402300#",
      "notes": "Big Book Study",
      "military": 19
  },
  {
      "name": "La Cienega Thursday 7:30 pm",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/6100931123",
      "phone": "(669) 900-6833",
      "code": "6100931123#",
      "notes": "20 min speaker, participation Meeting",
      "military": 19
  },
  {
      "name": "Liberty Group of Alcoholics Anonymous",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/2271468925",
      "phone": "",
      "notes": "Speaker Meeting Focusing on Solutions, Followed by Sharing",
      "military": 19
  },
  {
      "name": "Primary Purpose",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/695835381",
      "phone": "",
      "notes": "Big Book Study",
      "military": 19
  },
  {
      "name": "Principles Before Personalities",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/576360427",
      "phone": "(669) 900-6833",
      "code": "576360427#",
      "notes": "Big Book study & Participation",
      "military": 19
  },
  {
      "name": "Solutions",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/363065881",
      "phone": "",
      "notes": "Men’s Stag, 15-min speaker on the inventory process",
      "military": 19
  },
  {
      "name": "Steps To Life - Step Study",
      "day": "Thursday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/875860427?pwd=bGpNMmlBdWQzRm0rQ1JrYWZ0QmZLZz09",
      "phone": "(669) 900-6833",
      "code": "875860427#\nPassword: 511909",
      "notes": "Thursday night 12&12 Step Study. 15 min speaker + participation.",
      "military": 19
  },
  {
      "name": "Newcomers - Burbank Group",
      "day": "Thursday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "open newcomers meeting 1 hour unless stated",
      "military": 20
  },
  {
      "name": "Ohio St Thursday",
      "day": "Thursday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/382005101",
      "phone": "(669) 900-9128",
      "code": "382-005-101#",
      "notes": "Speaker/Participation",
      "military": 20
  },
  {
      "name": "Powerless #1",
      "day": "Thursday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/172157389",
      "phone": "(669) 900-9128",
      "code": "172157389#",
      "notes": "As Bill Sees It, 20min speaker, participation",
      "military": 20
  },
  {
      "name": "Powerless #1",
      "day": "Thursday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/172157389",
      "phone": "(166) 990-09128",
      "code": "172157389#",
      "notes": "As Bill Sees It, 20 min speaker, participation",
      "military": 20
  },
  {
      "name": "Women’s Candlelight (W)",
      "day": "Thursday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/221547134",
      "phone": "",
      "notes": "Women’s Meeting",
      "military": 20
  },
  {
      "name": "Namaste Sober",
      "day": "Thursday",
      "time": "8:15 PM",
      "link": "https://zoom.us/j/834288230",
      "phone": "",
      "notes": "11th Step Yoga and Mediation Meeting. 1 hour and 15 minutes.",
      "military": 20
  },
  {
      "name": "Thursday Alvarado - Echo Park AA",
      "day": "Thursday",
      "time": "8:30 PM",
      "link": "https://zoom.us/j/5564206969",
      "phone": "(669) 900-6833",
      "code": "5564206969",
      "notes": "15 minute speaker + participation",
      "military": 20
  },
  {
      "name": "Chapter 12 Coed discussion",
      "day": "Thursday",
      "time": "9:00 PM",
      "link": "https://zoom.us/j/148440946",
      "phone": "(669) 900-6833",
      "code": "148440946#",
      "notes": "10 Minute lead and discussion",
      "military": 21
  },
  {
      "name": "Sunlight of the World Spirit - Speaker/Participation",
      "day": "Thursday",
      "time": "9:00 PM",
      "link": "https://zoom.us/j/951810083",
      "phone": "(669) 900-6833",
      "code": "951810083#",
      "notes": "Closed Meeting of Alcoholics Anonymous for those who identify as an alcoholic or have the desire to stop drinking.",
      "military": 21
  },
  {
      "name": "Principles Before Pandemic - Late Night",
      "day": "Thursday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/230937550",
      "phone": "(408) 638-0968",
      "code": "230937550#",
      "notes": "Reading from As Bill Sees It, 10 min Speaker + Participation",
      "military": 22
  },
  {
      "name": "WANGL (We Are Not A Glum Lot)",
      "day": "Thursday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/998455885",
      "phone": "(669) 900-6833",
      "code": "998455885#",
      "notes": "Late night open meeting that starts rowdy with some call and response and then settles in to focus on sobriety.",
      "military": 22
  },
  {
      "name": "5:30am Valley Club Daily Reflections",
      "day": "Friday",
      "time": "5:30 AM",
      "link": "https://zoom.us/j/664561304",
      "phone": "",
      "notes": "Daily Reflections Topic + Participation",
      "military": 5
  },
  {
      "name": "The Early Show",
      "day": "Friday",
      "time": "6:00 AM",
      "link": "https://zoom.us/j/121338280?pwd=cU0vVDU4djV1ZU9kL0Z6SWpSNXdjUT09",
      "phone": "",
      "notes": "Open meeting M-F, daily reading and sharing from As Bill Sees It",
      "military": 6
  },
  {
      "name": "7am Shivering Denizens Tropical Cafe",
      "day": "Friday",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/8626362214",
      "phone": "(669) 900-6833",
      "code": "8626362214#",
      "notes": "speaker meeting",
      "military": 7
  },
  {
      "name": "Alano Club Grapevine 715AM",
      "day": "Friday",
      "time": "7:15 AM",
      "link": "https://zoom.us/j/693053917",
      "phone": "(669) 900-6833",
      "code": "693053917#",
      "notes": "Grapevine; Speaker Participation",
      "military": 7
  },
  {
      "name": "Unurban Santa Monica Grapevine",
      "day": "Friday",
      "time": "7:15 AM",
      "link": "https://zoom.us/j/388163992",
      "phone": "(669) 900-6833",
      "code": "388163992#",
      "notes": "Speaker/Participation",
      "military": 7
  },
  {
      "name": "Thank God I’m Sober Hollywood & Gardner",
      "day": "Friday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/271617503",
      "phone": "",
      "notes": "Speaker & Participation",
      "military": 7
  },
  {
      "name": "Thank God It’s Friday",
      "day": "Friday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/123834055",
      "phone": "",
      "notes": "20min speaker, participation",
      "military": 7
  },
  {
      "name": "John Barleycorn Must Die",
      "day": "Friday",
      "time": "8:30 AM",
      "link": "https://zoom.us/j/398032429",
      "phone": "(669) 900-6833",
      "code": "398032429#",
      "notes": "Speaker, Meditation meeting",
      "military": 8
  },
  {
      "name": "As Bill Sees It",
      "day": "Friday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/841542867",
      "phone": "(669) 900-6833",
      "code": "841542867#",
      "notes": "As Bill Sees It, Speaker, Participation",
      "military": 9
  },
  {
      "name": "Tribeca East West",
      "day": "Friday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/351932194",
      "phone": "(669) 900-9128",
      "code": "561373578#",
      "notes": "New Yorkers in LA and NYC",
      "military": 10
  },
  {
      "name": "A Good Way To Start",
      "day": "Friday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/9426418283",
      "phone": "(669) 900-6833",
      "code": "9426418283#",
      "notes": "1 hr. 10 min speaker, sharing.",
      "military": 12
  },
  {
      "name": "A Good Way To Start (Eagle Rock)",
      "day": "Friday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/9426418283",
      "phone": "",
      "notes": "1hr Speaker/Participation / Meeting code: 942 641 8283",
      "military": 12
  },
  {
      "name": "Friday Daily Grill Noon Men’s Stag Meeting",
      "day": "Friday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/934073472",
      "phone": "",
      "notes": "Men’s Stag, Speaker, Participation",
      "military": 12
  },
  {
      "name": "Friday WLA Men’s Stag Meeting",
      "day": "Friday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/931031420",
      "phone": "",
      "notes": "Men’s Stag Speaker Meeting - Solution Oriented",
      "military": 12
  },
  {
      "name": "Hole In The Sky - Big Book Study",
      "day": "Friday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/295712428",
      "phone": "(669) 900-6833",
      "code": "295712428#",
      "notes": "Big Book Study/Participation",
      "military": 12
  },
  {
      "name": "Moorpark Good Day Noon Big Book Study",
      "day": "Friday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/365967968",
      "phone": "(166) 990-06833",
      "code": "365967968# Meeting code: 365967968",
      "notes": "Book Study",
      "military": 12
  },
  {
      "name": "WARG Participation Meeting",
      "day": "Friday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/5444707170",
      "phone": "(669) 900-6833",
      "code": "5444707170#",
      "notes": "15 minute speaker / participation meeting",
      "military": 12
  },
  {
      "name": "Pathfinders 12:30",
      "day": "Friday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
      "phone": "(346) 248-7799",
      "code": "941672314#",
      "notes": "Open Discussion",
      "military": 12
  },
  {
      "name": "Sober Solutions Women’s Meeting",
      "day": "Friday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/410337602",
      "phone": "(669) 900-9128",
      "code": "410337602#\nPassword 086443",
      "notes": "Women’s Meeting, 15 min. speaker & participation",
      "military": 12
  },
  {
      "name": "The Green Room",
      "day": "Friday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/3208662276",
      "phone": "",
      "notes": "speaker/participation",
      "military": 12
  },
  {
      "name": "Friday Camden BH",
      "day": "Friday",
      "time": "1:00 PM",
      "link": "https://zoom.us/j/2474183320",
      "phone": "",
      "notes": "Mixed women/men. 15 minute speaker + Participation",
      "military": 13
  },
  {
      "name": "Off The Wall",
      "day": "Friday",
      "time": "1:00 PM",
      "link": "https://zoom.us/j/769496947",
      "phone": "",
      "notes": "15 min speaker/discussion",
      "military": 13
  },
  {
      "name": "St. Philips \"Noon\" Meeting - Pasadena",
      "day": "Friday",
      "time": "1:00 PM",
      "link": "https://zoom.us/j/378503606",
      "phone": "(669) 900-9128",
      "code": "378503606#",
      "notes": "Closed Meeting; reoccurring through April 19 or until health restrictions are lifted",
      "military": 13
  },
  {
      "name": "Mid Afternoon Madness",
      "day": "Friday",
      "time": "3:00 PM",
      "link": "https://zoom.us/j/240743991",
      "phone": "(669) 900-6833",
      "code": "240743991#",
      "notes": "One hour meeting with a 10 minute speaker and participation from coast to coast. All are welcome.",
      "military": 15
  },
  {
      "name": "Relapse Prevention",
      "day": "Friday",
      "time": "5:30 PM",
      "link": "https://zoom.us/j/7278141014",
      "phone": "(669) 900-9128",
      "code": "7278141014#",
      "notes": "12&12 Step Study",
      "military": 17
  },
  {
      "name": "Emotional Sobriety- Burbank Group",
      "day": "Friday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Open meeting",
      "military": 18
  },
  {
      "name": "Friday Life After 10",
      "day": "Friday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/979003066",
      "phone": "(346) 248-7799",
      "code": "979003066#",
      "notes": "Leader 10min share, then participation 10+ to share, time for burning desire under 10yrs",
      "military": 18
  },
  {
      "name": "Hole In The Sky - Daily Reflections Meeting",
      "day": "Friday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/137609502",
      "phone": "(669) 900-6833",
      "code": "137609502#",
      "notes": "Daily Reflections/Participation",
      "military": 18
  },
  {
      "name": "Happy Hour (Hollywood LGBT Center)",
      "day": "Friday",
      "time": "6:10 PM",
      "link": "https://zoom.us/j/743349250",
      "phone": "",
      "notes": "LGBT+, 15 min speaker, participation",
      "military": 18
  },
  {
      "name": "Friday Night AA Meeting",
      "day": "Friday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/295249945?pwd=bTZIZHV6TEtYVDhaNkJXQitlalI2QT09",
      "phone": "",
      "notes": "1 hour participation meeting, 10- 15 minute main share with a topic",
      "military": 18
  },
  {
      "name": "Grant Park BBQ & Book Study",
      "day": "Friday",
      "time": "6:30 PM",
      "link": "https://us04web.zoom.us/j/2401839325",
      "phone": "(669) 900-6833",
      "code": "2401839325#",
      "notes": "Big Book Discussion. Read as much or as little as you like. Raise your hand in chat to participate or to share on the text.",
      "military": 18
  },
  {
      "name": "Holyywood Young People’s Literature Study",
      "day": "Friday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/300109506",
      "phone": "",
      "notes": "1 hour Young Peoples Book Study",
      "military": 18
  },
  {
      "name": "Friday Night PG & Chill",
      "day": "Friday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/802496652",
      "phone": "(166) 990-06833",
      "code": "802496652",
      "notes": "Open AA Speaker + Particpation",
      "military": 19
  },
  {
      "name": "Ladies Friday Night Out (W)",
      "day": "Friday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/143891343",
      "phone": "(669) 900-6833",
      "code": "143891343#",
      "notes": "Women’s Meeting. 15min speaker + Participation",
      "military": 19
  },
  {
      "name": "Balancing Act",
      "day": "Friday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/914562034",
      "phone": "",
      "notes": "15min speaker",
      "military": 19
  },
  {
      "name": "Beginners Workshop Meeting",
      "day": "Friday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/722501758",
      "phone": "(301) 715-8592",
      "code": "722501758#",
      "notes": "",
      "military": 19
  },
  {
      "name": "Best of Old Time AA",
      "day": "Friday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/8021543359",
      "phone": "(669) 900-6833",
      "code": "3414167606#\nParticipant code: 47",
      "notes": "Speaker & Q&A",
      "military": 19
  },
  {
      "name": "Friday Night Beginner’s Meeting",
      "day": "Friday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/139736550",
      "phone": "",
      "notes": "Speaker meeting (45 min speaker)",
      "military": 19
  },
  {
      "name": "Friday Night Camden online Beverly Hills",
      "day": "Friday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/971435140",
      "phone": "(669) 900-6833",
      "code": "971435140#",
      "notes": "10-15 min speaker/group participation",
      "military": 19
  },
  {
      "name": "Magnolia Park Steps & Traditions Meeting",
      "day": "Friday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/659191310",
      "phone": "(669) 900-6833",
      "code": "282309192#",
      "notes": "M/F - 15 min Speaker, Participation 12&12 reading & sharing",
      "military": 19
  },
  {
      "name": "Take off your shoes Friday meditation",
      "day": "Friday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/174437715",
      "phone": "",
      "notes": "10 min meditation speaker share.",
      "military": 19
  },
  {
      "name": "Elm Street - Venice",
      "day": "Friday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/879291378",
      "phone": "(669) 900-9128",
      "code": "879291378#",
      "notes": "5 minute mediation, 30 minute speaker, voluntary sharing,",
      "military": 19
  },
  {
      "name": "Friday Night Newcomers",
      "day": "Friday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/7041698066",
      "phone": "",
      "notes": "10 min speaker, participation",
      "military": 19
  },
  {
      "name": "Fun With Problems Speaker Meeting",
      "day": "Friday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/804626562",
      "phone": "(669) 900-9128",
      "code": "804626562#",
      "notes": "20min Speaker Meeting w/ Participation",
      "military": 19
  },
  {
      "name": "Beverly Glen \"Dickens\" Speaker Meeting!",
      "day": "Friday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/614813270",
      "phone": "(669) 900-6833",
      "code": "614813270#",
      "notes": "45 Min Speaker Meeting",
      "military": 20
  },
  {
      "name": "Bridge Back To Recovery - Topic Discussion",
      "day": "Friday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/425640373?pwd=bEhOaSsyd2oyK1h3d0FZc2NPcmk3UT09",
      "phone": "(669) 900-6833",
      "code": "425640373#\nPassword: 790309",
      "notes": "Quaker Style Format",
      "military": 20
  },
  {
      "name": "Brunswick Patio AA Speaker",
      "day": "Friday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/5187632014?pwd=U0U4RjE0d0ZHQXc3a25mY1dWbnk3UT09",
      "phone": "",
      "notes": "Speaker meeting",
      "military": 20
  },
  {
      "name": "Friday Night Online AA",
      "day": "Friday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/449681043",
      "phone": "",
      "notes": "participation",
      "military": 20
  },
  {
      "name": "Friday Night SOS Meeting (Plummer Park)",
      "day": "Friday",
      "time": "8:00 PM",
      "link": "https://valassisdigital.zoom.us/j/865684852",
      "phone": "",
      "notes": "1 hour meeting, 20 min speaker, participation.",
      "military": 20
  },
  {
      "name": "Friday Night We Agnostics (On Zoom)",
      "day": "Friday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/4949169875",
      "phone": "(669) 900-6833",
      "code": "4949169875#",
      "notes": "Secular/Agnostics, Speaker, Participation, 1 hr.",
      "military": 20
  },
  {
      "name": "Living Sober",
      "day": "Friday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/419115363?pwd=Nm82YTQ4WUxBS0pQNUNWVkR4bFF3Zz09",
      "phone": "(301) 715-8592",
      "code": "419115363# Password: 823473",
      "notes": "Primarily LGBT+. Speaker + participation meeting.",
      "military": 20
  },
  {
      "name": "Lottery - Burbank Group",
      "day": "Friday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Come check us out..",
      "military": 20
  },
  {
      "name": "New Hope On New Hampshire",
      "day": "Friday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/374184172?pwd=QkwraFk2VWN0ZWQvNVRmTWIwK21UQT09",
      "phone": "(669) 900-6833",
      "code": "374184172#\nPassword: 091879",
      "notes": "1 hr speaker meeting starts at 8pm. Chat room is opened at 7:30pm",
      "military": 20
  },
  {
      "name": "Primary Purpose",
      "day": "Friday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/5588838366",
      "phone": "",
      "notes": "Big Book Study/Speaker/Participation",
      "military": 20
  },
  {
      "name": "TGIF",
      "day": "Friday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/951340960",
      "phone": "(346) 248-7799",
      "code": " 951 340 960",
      "notes": "Open Meeting, 30 min speaker, participation",
      "military": 20
  },
  {
      "name": "Living Well and Sober (San Gabriel)",
      "day": "Friday",
      "time": "8:15 PM",
      "link": "https://AA24x7.com",
      "phone": "(669) 900-6833",
      "code": "5042974103#",
      "notes": "Speaker: Maybe Temp Participation + AA24x7.com can help any meeting get online without the tech obstacles",
      "military": 20
  },
  {
      "name": "Fridays Into Action Hwd & Gardner Candlelight",
      "day": "Friday",
      "time": "8:30 PM",
      "link": "https://zoom.us/j/340943612",
      "phone": "(669) 900-9128",
      "code": "340943612#",
      "notes": "Candlelight, participation",
      "military": 20
  },
  {
      "name": "The Gong Show",
      "day": "Friday",
      "time": "8:30 PM",
      "link": "https://livenation.zoom.us/j/8392106533",
      "phone": "(669) 900-6833,8392106533#",
      "notes": "Speaker participation meeting",
      "military": 20
  },
  {
      "name": "Sunlight of the World Spirit - Speaker/Participation",
      "day": "Friday",
      "time": "9:00 PM",
      "link": "https://zoom.us/j/951810083",
      "phone": "(669) 900-6833",
      "code": "951810083#",
      "notes": "Closed Meeting of Alcoholics Anonymous for those who identify as an alcoholic or have the desire to stop drinking.",
      "military": 21
  },
  {
      "name": "Candlelight - Burbank Group",
      "day": "Friday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Candlelight meeting for those who need one",
      "military": 22
  },
  {
      "name": "Principles Before Pandemic - Late Night",
      "day": "Friday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/230937550",
      "phone": "(408) 638-0968",
      "code": "230937550#",
      "notes": "Reading from As Bill Sees It, 10 Min Speaker + Participation",
      "military": 22
  },
  {
      "name": "Friday Night Marina Center Late Night",
      "day": "Friday",
      "time": "11:00 PM",
      "link": "https://zoom.us/j/718944136",
      "phone": "(408) 638-0968",
      "code": "718944136#",
      "notes": "15-20 Minute Speaker + Participation / Open Meeting",
      "military": 23
  },
  {
      "name": "5:30am Valley Club AA Literature & Participation",
      "day": "Saturday",
      "time": "5:30 AM",
      "link": "https://zoom.us/j/664561304",
      "phone": "",
      "notes": "AA Literature + Participation",
      "military": 5
  },
  {
      "name": "Attitude Adjustment (Hermosa/SBAC)",
      "day": "Saturday",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/255900683",
      "phone": "",
      "notes": "Open, Mixed, Participation, 1Hr",
      "military": 7
  },
  {
      "name": "Beginners & Winners 7am Sat Cafe Tropical",
      "day": "Saturday",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/2278717319",
      "phone": "",
      "notes": "15 - 20 min speaker, sharing",
      "military": 7
  },
  {
      "name": "Doing the Deal - MEN’S STAG",
      "day": "Saturday",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/6254596555",
      "phone": "",
      "notes": "Participation with 2 Minute Timer",
      "military": 7
  },
  {
      "name": "Valley Club 7am Big Show",
      "day": "Saturday",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/160558337",
      "phone": "",
      "notes": "Leader & Participation",
      "military": 7
  },
  {
      "name": "Gladstones Solutions by the Sea",
      "day": "Saturday",
      "time": "7:20 AM",
      "link": "https://zoom.us/j/841250180",
      "phone": "(669) 900-6833",
      "code": "841250180#",
      "notes": "Speaker Meeting",
      "military": 7
  },
  {
      "name": "Attitude Adjustment (South Pasadena)",
      "day": "Saturday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/177749180?pwd=UmZOdStxY2Jyamh1VFBYQjBreWZudz09.",
      "phone": "(720) 707-2699",
      "code": "177749180#\nPassword: 974641#",
      "notes": "Saturday & Sunday, Daily Readings, Participation",
      "military": 7
  },
  {
      "name": "Hi & Dry 8000 Sunset",
      "day": "Saturday",
      "time": "8:00 AM",
      "link": "https://zoom.us/j/110152140",
      "phone": "(669) 900-6833",
      "code": "110152140#",
      "notes": "Mixed, Speaker + Participation",
      "military": 8
  },
  {
      "name": "Hole In The Sky - Spiritual Discussion",
      "day": "Saturday",
      "time": "8:00 AM",
      "link": "https://zoom.us/j/240808936",
      "phone": "(669) 900-6833",
      "code": "240808936#",
      "notes": "Discussion/Participation",
      "military": 8
  },
  {
      "name": "Sunrise Step Study",
      "day": "Saturday",
      "time": "8:15 AM",
      "link": "https://zoom.us/j/347486176?pwd=Z2Nqd0ZKaXFBVEU2ZS9JTndocStvUT09",
      "phone": "(669) 900-6833",
      "code": "347486176#",
      "notes": "Step Study",
      "military": 8
  },
  {
      "name": "Laurel Canyon Grapevine (Molly Malone’s)",
      "day": "Saturday",
      "time": "8:30 AM",
      "link": "https://zoom.us/j/289676399",
      "phone": "",
      "notes": "Grapevine reading, short speaker, round robin (ends after everyone shares)",
      "military": 8
  },
  {
      "name": "No Whiners - Highland Park Womens (W)",
      "day": "Saturday",
      "time": "8:30 AM",
      "link": "https://zoom.us/j/104216210",
      "phone": "(669) 900-6833",
      "code": "104216210#",
      "notes": "Open Women’s Meeting. Shares called by lottery number. Email to join phone list: nowhinersaa@gmail.com",
      "military": 8
  },
  {
      "name": "North Hollywood Group of AA",
      "day": "Saturday",
      "time": "8:30 AM",
      "link": "https://zoom.us/j/214504040",
      "phone": "(669) 900-6833",
      "code": "214504040#",
      "notes": "Speaker, participation",
      "military": 8
  },
  {
      "name": "New Brunswick Morning Participation",
      "day": "Saturday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/8731605989",
      "phone": "",
      "notes": "Closed / Mixed / 15min Speaker & Participation",
      "military": 9
  },
  {
      "name": "Ohio Saturday Solutions",
      "day": "Saturday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/9313763436",
      "phone": "(669) 900-9128",
      "code": "9313763436#",
      "notes": "Ohio Speaker Meeting with Solutions",
      "military": 9
  },
  {
      "name": "Original What It’s Like Now (M)",
      "day": "Saturday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/6990482205",
      "phone": "(669) 900-9128",
      "code": "6990482205#",
      "notes": "Men’s meeting; step and tradition study; 20-minute speaker followed by participation; 1 hour",
      "military": 9
  },
  {
      "name": "Spiritual Participation - Burbank Group",
      "day": "Saturday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Spiritual side of sobriety",
      "military": 9
  },
  {
      "name": "Survivors",
      "day": "Saturday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/813600823",
      "phone": "",
      "notes": "West Hollywood Recovery Center’s 9am Saturday morning Speaker / Participation meeting",
      "military": 9
  },
  {
      "name": "Unknown / No Name",
      "day": "Saturday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/602639460",
      "phone": "",
      "notes": "",
      "military": 9
  },
  {
      "name": "Saturday Morning Women’s Meeting (Burbank)",
      "day": "Saturday",
      "time": "9:30 AM",
      "link": "https://zoom.us/j/3804815257",
      "phone": "",
      "notes": "Burbank, hour and a half",
      "military": 9
  },
  {
      "name": "Windsor Club Men’s Stag (Rule 62)",
      "day": "Saturday",
      "time": "9:30 AM",
      "link": "https://zoom.us/j/9604824615",
      "phone": "(253) 215-8782",
      "code": "9604824615#",
      "notes": "Glendale speaker & participation Closed meeting",
      "military": 9
  },
  {
      "name": "Sanity On Saturday",
      "day": "Saturday",
      "time": "9:30 AM",
      "link": "https://zoom.us/j/727888563",
      "phone": "",
      "notes": "Speaker/Participation",
      "military": 9
  },
  {
      "name": "Bagels and Lox - Normally held at Pico Alano Club (M)",
      "day": "Saturday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/953336754",
      "phone": "",
      "notes": "Men’s stag, speaker, participation",
      "military": 10
  },
  {
      "name": "Book Study Sat 10am Prospect & Rodney",
      "day": "Saturday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/5280644214",
      "phone": "(669) 900-9128",
      "code": "5280644214#",
      "notes": "1 hour book study meeting with round robin sharing",
      "military": 10
  },
  {
      "name": "Chandler Sat Step Study",
      "day": "Saturday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/7148334377",
      "phone": "(669) 900-9128",
      "code": "7148334377#",
      "notes": "1 1/2 hour speaker participation step study meeting",
      "military": 10
  },
  {
      "name": "DIVA (Women’s Meeting)",
      "day": "Saturday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/765849881",
      "phone": "(669) 900-6833",
      "code": "765849881#",
      "notes": "Women’s Meeting. 10 minute speaker. Raised hand sharing. Time set aside for newcomers to share & burning desires",
      "military": 10
  },
  {
      "name": "Bread & Roses Men’s Stag (M)",
      "day": "Saturday",
      "time": "10:30 AM",
      "link": "https://zoom.us/j/410736840",
      "phone": "(669) 900-6833",
      "code": "410736840#",
      "notes": "Men’s Meeting",
      "military": 10
  },
  {
      "name": "Grant Park Pasadena",
      "day": "Saturday",
      "time": "11:00 AM",
      "link": "https://zoom.us/j/587318378",
      "phone": "(669) 900-6833",
      "code": "587318378#",
      "notes": "Leader/discussion",
      "military": 11
  },
  {
      "name": "North Hollywood Saturday Morning Gratitude Meeting",
      "day": "Saturday",
      "time": "11:00 AM",
      "link": "https://zoom.us/j/462205062",
      "phone": "(669) 900-6833",
      "code": "462205062#",
      "notes": "15 min. Speaker & Participation Open meeting",
      "military": 11
  },
  {
      "name": "Saturday Morning - Dunsmore Group",
      "day": "Saturday",
      "time": "11:00 AM",
      "link": "https://zoom.us/j/590137296",
      "phone": "(669) 900-6833",
      "code": "590137296#",
      "notes": "1 Hour meeting from the Verdugo Hills Alano Club",
      "military": 11
  },
  {
      "name": "Drunkalogueshow",
      "day": "Saturday",
      "time": "11:30 AM",
      "link": "https://join.freeconferencecall.com/drunkalogueshow",
      "phone": "(425) 585-6543 (Direct phone)",
      "notes": "Speaker/Participation",
      "military": 11
  },
  {
      "name": "Started from a Bottom",
      "day": "Saturday",
      "time": "11:30 AM",
      "link": "https://zoom.us/j/694720115",
      "phone": "(669) 900-6833",
      "code": "694720115#",
      "notes": "20 minute speaker + participation",
      "military": 11
  },
  {
      "name": "Started from a Bottom",
      "day": "Saturday",
      "time": "11:30 AM",
      "link": "https://zoom.us/j/268881530",
      "phone": "(669) 900-6833",
      "code": "268881530#",
      "notes": "20 minute speaker participation",
      "military": 11
  },
  {
      "name": "Hole In The Sky - 12&12 Book Study",
      "day": "Saturday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/295712428",
      "phone": "(669) 900-6833",
      "code": "295712428#",
      "notes": "12&12 book study",
      "military": 12
  },
  {
      "name": "SAT NOON men’s stag - Burbank Group",
      "day": "Saturday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Men’s stag",
      "military": 12
  },
  {
      "name": "Saturday Men’s Stag Speaker Meeting",
      "day": "Saturday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/931031420",
      "phone": "",
      "notes": "Men’s Stag Speaker Meeting - Solution Oriented",
      "military": 12
  },
  {
      "name": "WARG Participation Meeting",
      "day": "Saturday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/5444707170",
      "phone": "(669) 900-6833",
      "code": "5444707170#",
      "notes": "Participation Meeting",
      "military": 12
  },
  {
      "name": "Pathfinders 12:30",
      "day": "Saturday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
      "phone": "(346) 248-7799",
      "code": "941672314#",
      "notes": "Closed As Bill Sees It",
      "military": 12
  },
  {
      "name": "Epiphany",
      "day": "Saturday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/261233823?pwd=Y3Nuc1NwMTRzZVdzdElVQUwvd2ppZz09",
      "phone": "",
      "notes": "15 minute speaker with participation",
      "military": 12
  },
  {
      "name": "Fellowship of the Spirit",
      "day": "Saturday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/105638753?pwd=a0RKWEltYWZPLzFObTRoZ1JFRVRJdz09",
      "phone": "(669) 900-6833",
      "code": "105638753#\nPassword: 733805",
      "notes": "Open Speaker/Participation (1 Hour)",
      "military": 17
  },
  {
      "name": "You Are Not Alone",
      "day": "Saturday",
      "time": "5:30 PM",
      "link": "https://zoom.us/j/7278141014",
      "phone": "(669) 900-9128",
      "code": "7278141014#",
      "notes": "Speaker and share",
      "military": 17
  },
  {
      "name": "Jammin’ in Hollywood",
      "day": "Saturday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/915910195",
      "phone": "(253) 215-8782",
      "code": "915910195#",
      "notes": "Open, Speaker, Participation",
      "military": 18
  },
  {
      "name": "Life After Ten",
      "day": "Saturday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/908630651",
      "phone": "(669) 900-9128",
      "code": "908630651#",
      "notes": "Speaker Participation",
      "military": 18
  },
  {
      "name": "Mixed Bag",
      "day": "Saturday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/930800984",
      "phone": "(669) 900-9128",
      "code": "930800984#",
      "notes": "Speaker, participation, open meeting",
      "military": 18
  },
  {
      "name": "Sat 6pm Step Study (Normally @ 14th & Olympic)",
      "day": "Saturday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/586195377",
      "phone": "",
      "notes": "1 hour step study speaker & participation",
      "military": 18
  },
  {
      "name": "Sobriety First",
      "day": "Saturday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/3146420781",
      "phone": "",
      "notes": "Speaker/Participation",
      "military": 18
  },
  {
      "name": "Topic Discussion - Burbank Group",
      "day": "Saturday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "AA topic",
      "military": 18
  },
  {
      "name": "Joslyn Park Beginners",
      "day": "Saturday",
      "time": "6:15 PM",
      "link": "https://zoom.us/j/151958754",
      "phone": "(669) 900-6833",
      "code": "151958754#",
      "notes": "Beginner’s Meeting",
      "military": 18
  },
  {
      "name": "Saturday Night Camden",
      "day": "Saturday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/883082249",
      "phone": "(669) 900-6833",
      "code": "883082249#",
      "notes": "",
      "military": 18
  },
  {
      "name": "Unknown / No Name",
      "day": "Saturday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/2445479025",
      "phone": "",
      "notes": "",
      "military": 18
  },
  {
      "name": "We Are Not Alone LGBT",
      "day": "Saturday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/567976426",
      "phone": "",
      "notes": "Open LGBT Speaker/participation",
      "military": 18
  },
  {
      "name": "Saturday Night Way Of Life",
      "day": "Saturday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/802496652",
      "phone": "(669) 900-6833",
      "code": "802496652#",
      "notes": "Participation + Speaker",
      "military": 19
  },
  {
      "name": "Solutions in Sobriety",
      "day": "Saturday",
      "time": "7:00 PM",
      "link": "http://zoom.us/j/863255768",
      "phone": "Meeting ID 863255768 Password 854339",
      "notes": "Meeting ID 863255768 Password 854339",
      "military": 19
  },
  {
      "name": "Hope On The Hill",
      "day": "Saturday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/9375866854",
      "phone": "",
      "notes": "Open. Speaker.",
      "military": 19
  },
  {
      "name": "Marina Center Participation Meeting",
      "day": "Saturday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/192911151",
      "phone": "(669) 900-6833",
      "code": "192911151#",
      "notes": "Speaker, Participation",
      "military": 19
  },
  {
      "name": "Nite Lite (The Purple room)",
      "day": "Saturday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/629100763?pwd=M2NqbGVYU0lUWEVnUGlCbXRMN3R4Zz09",
      "phone": "(669) 900-6833",
      "code": "629100763#\nPassword: 494307",
      "notes": "Participation",
      "military": 19
  },
  {
      "name": "No Matter What (Café Tropical)",
      "day": "Saturday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/8487681638",
      "phone": "(408) 638-0968",
      "code": "8487681638#",
      "notes": "20 minute speaker + Participation.",
      "military": 19
  },
  {
      "name": "Sanctuary Meeting-Manhattan Beach",
      "day": "Saturday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/637457163",
      "phone": "",
      "notes": "One hour mtg- 30 min Speaker w/ 20 min participation.",
      "military": 19
  },
  {
      "name": "Coffeehouse Meeting",
      "day": "Saturday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/523488118?pwd=bldLSFU4RDZoZ0FoaEFuWHk5WFFpUT09",
      "phone": "",
      "notes": "Acoustic music meeting with speaker and songs",
      "military": 20
  },
  {
      "name": "Glassell Park As Bill Sees It / Habitat",
      "day": "Saturday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/214686690",
      "phone": "Meeting code: 214 686 690",
      "notes": "10 min speaker on As Bill Sees It then lottery share",
      "military": 20
  },
  {
      "name": "LQBTQ Topic Participation",
      "day": "Saturday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/145634734",
      "phone": "",
      "notes": "LQBTQ , Topic Participation",
      "military": 20
  },
  {
      "name": "Panel - Burbank Group",
      "day": "Saturday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Panel may change unless otherwise stated",
      "military": 20
  },
  {
      "name": "QUARANTINED ALL-STARS",
      "day": "Saturday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/6987730637",
      "phone": "(669) 900-6833",
      "code": "6987730637#",
      "notes": "15 min speaker ; tag team",
      "military": 20
  },
  {
      "name": "Saturday Brunswick 8pm",
      "day": "Saturday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/236446407",
      "phone": "(669) 900-6833",
      "code": "236446407#",
      "notes": "5-10 minute speaker followed by tagged topic discussion participation/sharing.",
      "military": 20
  },
  {
      "name": "Hollywood Squares",
      "day": "Saturday",
      "time": "8:30 PM",
      "link": "https://zoom.us/j/299908121",
      "phone": "(346) 248-7799",
      "code": "299908121#",
      "notes": "one hour and thirty minutes, two speaker meeting",
      "military": 20
  },
  {
      "name": "Ohio Street Beachcomber Meeting",
      "day": "Saturday",
      "time": "8:30 PM",
      "link": "https://zoom.us/j/947768885",
      "phone": "(669) 900-9128",
      "code": "947768885#",
      "notes": "2 speaker meeting",
      "military": 20
  },
  {
      "name": "Dark Secrets",
      "day": "Saturday",
      "time": "9:00 PM",
      "link": "https://zoom.us/j/102993439?pwd=aHFTTUc2bXJwTWdBTS9vbDBSWEhMZz09",
      "phone": "(253) 215-8782",
      "code": "102993439#",
      "notes": "Sponsor & Sponsee share on one of the steps followed by Q&A and sharing",
      "military": 21
  },
  {
      "name": "Candlelight - Burbank Group",
      "day": "Saturday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "candlelight",
      "military": 22
  },
  {
      "name": "Literature Study - Burbank Group",
      "day": "Saturday",
      "time": "11:30 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "AA Related",
      "military": 23
  },
  {
      "name": "SAT 12 midnight - THE BEGINNING OR THE END",
      "day": "Saturday",
      "time": "11:55 PM",
      "link": "https://zoom.us/j/755443907",
      "phone": "(213) 338-8477",
      "code": "755443907#",
      "notes": "Open Meeting, Speaker, BB readings, YPAA, 1 Hour-ish",
      "military": 23
  },
  {
      "name": "Saturday Step Study (Comedy Store)",
      "day": "Saturday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/292523094",
      "phone": "(669) 900-9128",
      "code": "292523094#",
      "notes": "Step Study",
      "military": 12
  },
  {
      "name": "5:30am Valley Club Emotional Sobriety",
      "day": "Sunday",
      "time": "5:30 AM",
      "link": "https://zoom.us/j/664561304",
      "phone": "",
      "notes": "Leader & Participation Meeting",
      "military": 5
  },
  {
      "name": "Attitude Adjustment (Hermosa/SBAC)",
      "day": "Sunday",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/587496266",
      "phone": "",
      "notes": "Open, Mixed, Participation, 1Hr",
      "military": 7
  },
  {
      "name": "Valley Club 7am Sunday Participation",
      "day": "Sunday",
      "time": "7:00 AM",
      "link": "https://zoom.us/j/963384401",
      "phone": "",
      "notes": "Leader & Participation",
      "military": 7
  },
  {
      "name": "Fresh Start",
      "day": "Sunday",
      "time": "7:30 AM",
      "link": "https://zoom.us/j/2471800919",
      "phone": "(669) 900-6833",
      "code": "123805095#",
      "notes": "Daily Reflection reading, no speaker, round-robin (host will choose)",
      "military": 7
  },
  {
      "name": "11th Step Meeting",
      "day": "Sunday",
      "time": "8:00 AM",
      "link": "https://zoom.us/j/616831865",
      "phone": "",
      "notes": "15 Min. speaker w/participation-11th step",
      "military": 8
  },
  {
      "name": "11th Step Meeting (Redford Hall)",
      "day": "Sunday",
      "time": "8:00 AM",
      "link": "https://zoom.us/j/616831865",
      "phone": "",
      "notes": "15 speaker + participation + 2 min meditation",
      "military": 8
  },
  {
      "name": "Hole In The Sky - Spiritual Discussion",
      "day": "Sunday",
      "time": "8:00 AM",
      "link": "https://zoom.us/j/240808936",
      "phone": "(669) 900-6833",
      "code": "240808936#",
      "notes": "Spiritual discussion/participation",
      "military": 8
  },
  {
      "name": "ORG Big Book Study",
      "day": "Sunday",
      "time": "8:00 AM",
      "link": "https://zoom.us/j/658399494",
      "phone": "",
      "notes": "Big Book Study Moderated by Heather M.",
      "military": 8
  },
  {
      "name": "Sunday 8 am Log Cabin Meeting",
      "day": "Sunday",
      "time": "8:00 AM",
      "link": "https://zoom.us/j/324242924?pwd=Y3BiSmhpOEtkTmJzU2ljczQwTUpHQT09",
      "phone": "",
      "notes": "Two Speakers One Hour (No Participation)",
      "military": 8
  },
  {
      "name": "11th Step Meditation",
      "day": "Sunday",
      "time": "8:15 AM",
      "link": "https://zoom.us/j/854228928",
      "phone": "(166) 990-06833",
      "code": "854228928#",
      "notes": "West LA Alano Club 11th Step Meditation Meeting 10 minutes of meditation, speaker & participation",
      "military": 8
  },
  {
      "name": "Sunday Morning Tropical 8:30 Speaker Meeting",
      "day": "Sunday",
      "time": "8:30 AM",
      "link": "https://zoom.us/j/150516814",
      "phone": "",
      "notes": "15 min speaker and participation",
      "military": 8
  },
  {
      "name": "Attitude Adjustment",
      "day": "Sunday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/5438733759",
      "phone": "(346) 248-7799",
      "code": "5438733759#",
      "notes": "15 min speaker, participation, 1 hr",
      "military": 9
  },
  {
      "name": "Decade and a Day",
      "day": "Sunday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/212287561",
      "phone": "(669) 900-6833",
      "code": "212287561#",
      "notes": "Mixed, Solutions, 15 min Speaker + participation, Secretary Doc P.,",
      "military": 9
  },
  {
      "name": "On Awakening",
      "day": "Sunday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/989150099",
      "phone": "(669) 900-6833",
      "code": "989150099#",
      "notes": "11th Step Speaker/Participation Meeting, LGBTQ+",
      "military": 9
  },
  {
      "name": "Spiritual Meeting - Burbank Group",
      "day": "Sunday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "AA meeting",
      "military": 9
  },
  {
      "name": "Sunday Am Miracle on Ohio",
      "day": "Sunday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/657357243",
      "phone": "(669) 900-6833",
      "code": "657357243#\nPassword: 050035",
      "notes": "Speaker",
      "military": 9
  },
  {
      "name": "The Page Turner Big Book Study Meeting",
      "day": "Sunday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/334301997?pwd=T2RqUHdBMTRETGFnYkgrUkloMTNrUT09",
      "phone": "(253) 215-8782",
      "code": "334301997#",
      "notes": "We read 3 pages from Big Book Every Meeting!!",
      "military": 9
  },
  {
      "name": "Upon Awakening",
      "day": "Sunday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/989150099",
      "phone": "(669) 900-6833",
      "code": "989150099#",
      "notes": "11th Step Speaker/Participation Meeting, LGBTQ+",
      "military": 9
  },
  {
      "name": "Upon Awakening",
      "day": "Sunday",
      "time": "9:00 AM",
      "link": "https://zoom.us/j/989150099",
      "phone": "(669) 900-6833",
      "code": "989150099#",
      "notes": "11th Step Speaker/Participation Meeting",
      "military": 9
  },
  {
      "name": "Malibu Sunday Morning Big Book Study",
      "day": "Sunday",
      "time": "9:30 AM",
      "link": "https://zoom.us/j/386997286",
      "phone": "(669) 900-9128",
      "code": "386997286#",
      "notes": "Big Book Study, 15 Minute Speaker, Group Participation",
      "military": 9
  },
  {
      "name": "Wake And Skate",
      "day": "Sunday",
      "time": "9:30 AM",
      "link": "https://zoom.us/j/9370043203",
      "phone": "",
      "notes": "15-20 min speaker share and involuntary sharing until 10:30",
      "military": 9
  },
  {
      "name": "Café Tropical Sunday 10 AM",
      "day": "Sunday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/451542354",
      "phone": "",
      "notes": "1.5 hour meeting; 15min speaker; book study (stories)",
      "military": 10
  },
  {
      "name": "Good, Bad, and Indifferet Women’s Stag (W)",
      "day": "Sunday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/9167331272?pwd=dGJ1NUVlcU80anNvN1JPQmlLMjAwdz09",
      "phone": "(669) 900-6833",
      "code": "9167331272#\nPassword: 17751",
      "notes": "Women’s meeting. 3-5min. Lead/Participation meeting",
      "military": 10
  },
  {
      "name": "I Am Stuck At Home Group",
      "day": "Sunday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/5841241194",
      "phone": "(669) 900-6833",
      "code": "5841241194#",
      "notes": "AA Speaker and Participation-60min (100 PPL Max)",
      "military": 10
  },
  {
      "name": "King’s Head Sunday Morning Daily Reflections Meeting",
      "day": "Sunday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/210029229",
      "phone": "(669) 900-9128",
      "code": "210029229#",
      "notes": "Daily Reflections Speaker/Participation meeting",
      "military": 10
  },
  {
      "name": "No Reservations Womens Meeting (W)",
      "day": "Sunday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/5289050952",
      "phone": "",
      "notes": "Women’s Meeting",
      "military": 10
  },
  {
      "name": "Pacific Palisades Workshop",
      "day": "Sunday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/659242424",
      "phone": "(669) 900-6833",
      "code": "659242424#",
      "notes": "Speaker/Workshop",
      "military": 10
  },
  {
      "name": "Sunday Morning Log Cabin",
      "day": "Sunday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/514501335?pwd=NU9xWjRNbCtGdHF5OFAvNWRnTUlJdz09",
      "phone": "(669) 900-6833",
      "code": "514501335#",
      "notes": "LGBTQ Speaker Meeting",
      "military": 10
  },
  {
      "name": "Sunday Morning Trudgers",
      "day": "Sunday",
      "time": "10:00 AM",
      "link": "https://zoom.us/j/234938810",
      "phone": "+16699009128",
      "code": "234938810#",
      "notes": "Speaker, Participation",
      "military": 10
  },
  {
      "name": "Robertson Originals",
      "day": "Sunday",
      "time": "10:30 AM",
      "link": "https://zoom.us/j/348087265",
      "phone": "(669) 900-9128",
      "code": "348087265#",
      "notes": "1 hour Speaker meeting",
      "military": 10
  },
  {
      "name": "Spiritual Solutions",
      "day": "Sunday",
      "time": "10:30 AM",
      "link": "https://zoom.us/s/5912185236",
      "phone": "(166) 990-09128",
      "code": "5912185236#",
      "notes": "Speaker Meeting",
      "military": 10
  },
  {
      "name": "Pathfinders 11:00 AM",
      "day": "Sunday",
      "time": "11:00 AM",
      "link": "https://zoom.us/j/307967847?pwd=ZzNiREd1MStnTEFTMGprOW84REdHdz09",
      "phone": "",
      "notes": "Open Discussion",
      "military": 11
  },
  {
      "name": "Women’s Sunday Morning-Chandler Lodge (W)",
      "day": "Sunday",
      "time": "11:00 AM",
      "link": "https://zoom.us/j/840932018",
      "phone": "",
      "notes": "Women’s meeting, 1 hour 15 min, speaker and share",
      "military": 11
  },
  {
      "name": "3rd & Gardner Meeting",
      "day": "Sunday",
      "time": "11:30 AM",
      "link": "https://zoom.us/j/549328587",
      "phone": "",
      "notes": "90 minute meeting - Morgan H. Secretary",
      "military": 11
  },
  {
      "name": "Speaker Meeting - Burbank Group",
      "day": "Sunday",
      "time": "11:30 AM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Speaker Meeting",
      "military": 11
  },
  {
      "name": "WARG Newcomer’s Meeting",
      "day": "Sunday",
      "time": "12:00 PM",
      "link": "https://zoom.us/j/5444707170",
      "phone": "(669) 900-6833",
      "code": "5444707170#",
      "notes": "Newcomers Participation Meeting",
      "military": 12
  },
  {
      "name": "Hole In The Sky - Big Book Study",
      "day": "Sunday",
      "time": "12:30 PM",
      "link": "https://zoom.us/j/787468826",
      "phone": "(669) 900-6833",
      "code": "787468826#",
      "notes": "Big Book study",
      "military": 12
  },
  {
      "name": "Cinderella Solutions Women’s Meeting",
      "day": "Sunday",
      "time": "4:00 PM",
      "link": "https://zoom.us/j/100678036",
      "phone": "",
      "notes": "Women’s Meeting + 15min Speaker + Participation",
      "military": 16
  },
  {
      "name": "Hole In The Sky - Sunday 4:30 Meeting (Mixed)",
      "day": "Sunday",
      "time": "4:30 PM",
      "link": "https://zoom.us/j/831719356",
      "phone": "(669) 900-6833",
      "code": "831719356#",
      "notes": "Co-Ed participation meeting",
      "military": 16
  },
  {
      "name": "As Bill Sees it - Burbank Group",
      "day": "Sunday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "As Bill sees it..",
      "military": 17
  },
  {
      "name": "Big Book Comes Alive Group",
      "day": "Sunday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/502755096/",
      "phone": "(669) 900-6833",
      "code": "502755096#",
      "notes": "Big Book study",
      "military": 17
  },
  {
      "name": "FAITH AT WORK Rodeo Drive Alt til mtg returns to home",
      "day": "Sunday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/211059158?pwd=TCtLYjhvOUVORjZLNHlicHZCaWpPQT09",
      "phone": "",
      "notes": "Closed AA 10 Min Speaker Participatiob",
      "military": 17
  },
  {
      "name": "Glendale Recovery Group",
      "day": "Sunday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/302519007",
      "phone": "(646) 558-8656",
      "code": "302519007#",
      "notes": "",
      "military": 17
  },
  {
      "name": "Sunday Soul Food",
      "day": "Sunday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/565239641",
      "phone": "(669) 900-6833",
      "code": "565239641#",
      "notes": "1 hour & 15 Minutes -Hour Speaker/Share",
      "military": 17
  },
  {
      "name": "Sunday Speaker Meeting",
      "day": "Sunday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/485882374",
      "phone": "",
      "notes": "",
      "military": 17
  },
  {
      "name": "Sunlight of the Spirit (Tropical)",
      "day": "Sunday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/310546428",
      "phone": "(669) 900-6833",
      "code": "310546428#",
      "notes": "NOTE: MEDITATION AT BEGINNING, PLEASE ENTER QUIETLY.\n5 min meditation + 15 min spkr + participation",
      "military": 17
  },
  {
      "name": "Virtual ReAAlity - Speaker + Participation",
      "day": "Sunday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/484612311",
      "phone": "",
      "notes": "10 Min Speaker + Participation",
      "military": 17
  },
  {
      "name": "WLA Co-Ed Speaker Meeting",
      "day": "Sunday",
      "time": "5:00 PM",
      "link": "https://zoom.us/j/485882374",
      "phone": "",
      "notes": "Co-Ed, 10min Speaker",
      "military": 17
  },
  {
      "name": "Positives In Sobriety",
      "day": "Sunday",
      "time": "5:30 PM",
      "link": "https://zoom.us/j/426056640",
      "phone": "(669) 900-6833",
      "code": "426056640#",
      "notes": "Open Meeting, LGBTQ+ Friendly, ASL Interpreter",
      "military": 17
  },
  {
      "name": "Dunsmore Sunday Speakers meeting",
      "day": "Sunday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/577380499",
      "phone": "",
      "notes": "1 hour speakers meeting open",
      "military": 18
  },
  {
      "name": "Life After 10",
      "day": "Sunday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/2213408022",
      "phone": "",
      "notes": "10min speaker, participation",
      "military": 18
  },
  {
      "name": "Sundowners",
      "day": "Sunday",
      "time": "6:00 PM",
      "link": "https://zoom.us/j/116995743",
      "phone": "(669) 900-6833",
      "code": "116995743#",
      "notes": "Open Speaker Meeting",
      "military": 18
  },
  {
      "name": "The Fire The Rose Jocelyn Park Santa Monica, CA",
      "day": "Sunday",
      "time": "6:15 PM",
      "link": "https://zoom.us/j/2728588136",
      "phone": "",
      "notes": "Speaker/Participation closed meeting 1 hour",
      "military": 18
  },
  {
      "name": "Fresh Start",
      "day": "Sunday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/485516350",
      "phone": "(669) 900-9128",
      "code": "485516350#",
      "notes": "Newcomer meeting, 10min speaker then 3min shares",
      "military": 18
  },
  {
      "name": "Hollywood Young People’s Sunday Speaker",
      "day": "Sunday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/803689016",
      "phone": "",
      "notes": "1 hour Young Peoples 2 speaker meeting; no participation",
      "military": 18
  },
  {
      "name": "Live And Let Live AA",
      "day": "Sunday",
      "time": "6:30 PM",
      "link": "https://usjoin.freeconferencecall.com",
      "phone": "1 425 436-6374, 375072#",
      "notes": "LGBT, Speaker, Paticipation,",
      "military": 18
  },
  {
      "name": "Malibu Methodist Sunday 6:30 Newcomers Meeting",
      "day": "Sunday",
      "time": "6:30 PM",
      "link": "https://zoom.us/j/6529951198",
      "phone": "(669) 900-6833",
      "code": "6529951198#",
      "notes": "Newcomers, 20 minute share, then open for sharing",
      "military": 18
  },
  {
      "name": "Hollywood Dell Meditation",
      "day": "Sunday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/661957944",
      "phone": "",
      "notes": "11th step meeting (one hour long with 20 meditation at the end)",
      "military": 19
  },
  {
      "name": "Step Study - Burbank Group",
      "day": "Sunday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Step with the Burbank Group",
      "military": 19
  },
  {
      "name": "Sunday Night Ohio",
      "day": "Sunday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/802496652",
      "phone": "(166) 990-06833",
      "code": "802496652",
      "notes": "Participation + Speaker",
      "military": 19
  },
  {
      "name": "Sunday Night Rolling Hills Estates Big Book Study",
      "day": "Sunday",
      "time": "7:00 PM",
      "link": "https://zoom.us/j/221580229",
      "phone": "",
      "notes": "Big Book study ",
      "code": " read a paragraph and share",
      "military": 19
  },
  {
      "name": "Beginners Candlelight Discussion",
      "day": "Sunday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/505403032",
      "phone": "",
      "notes": "Mixed meeting, ten minute speaker, 1.5h",
      "military": 19
  },
  {
      "name": "Marina Center Sunday Night Recovery LIVES ON!",
      "day": "Sunday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/205513210",
      "phone": "(669) 900-9128",
      "code": "205513210#",
      "notes": "7:30PM PST. Open. Speaker meeting.\nAA Speaker Series! Doors Open @ 7:10PM PST",
      "military": 19
  },
  {
      "name": "Venice Beach Group Sunday Night 3rd Step Meeting",
      "day": "Sunday",
      "time": "7:30 PM",
      "link": "https://zoom.us/j/617613609?pwd=T3pMelVKbkE2MnhLWUtwMG82U1JPUT09",
      "phone": "(669) 900-6833",
      "code": "617613609#",
      "notes": "1 Hour Open Speaker/ Participation Meeting",
      "military": 19
  },
  {
      "name": "Circle of Love (W)",
      "day": "Sunday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/4358362050",
      "phone": "(669) 900-6833",
      "code": "4358362050#",
      "notes": "Women’s Meeting, 15 min speaker, participation",
      "military": 20
  },
  {
      "name": "ORG Women’s Participation (W)",
      "day": "Sunday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/442211074",
      "phone": "",
      "notes": "Women’s Meeting",
      "military": 20
  },
  {
      "name": "Sunday Sobriety Hour Speaker (26th and Broadway)",
      "day": "Sunday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/756958333",
      "phone": "",
      "notes": "45 Minute Speaker",
      "military": 20
  },
  {
      "name": "Sunday Speakeasy",
      "day": "Sunday",
      "time": "8:00 PM",
      "link": "https://zoom.us/j/960521144?pwd=V0JnZXNIWnVvSTZMLzJhRWdxbnZVdz09",
      "phone": "(669) 900-6833",
      "code": "960521144#",
      "notes": "Speaker plus topic sharing. Open & mixed. Password SPEAKEASY",
      "military": 20
  },
  {
      "name": "The Clam Bake (W)",
      "day": "Sunday",
      "time": "8:00 PM",
      "link": "https://bluejeans.com/4242021861",
      "phone": "(888) 748-9073",
      "code": "4242021861#",
      "notes": "Women’s Meeting, 25min speaker, participation",
      "military": 20
  },
  {
      "name": "Tell It Like It Is",
      "day": "Sunday",
      "time": "8:15 PM",
      "link": "https://zoom.us/j/534848182",
      "phone": "",
      "notes": "20min speaker / participation",
      "military": 20
  },
  {
      "name": "Cafe Tropical Sunday Night 8:30p",
      "day": "Sunday",
      "time": "8:30 PM",
      "link": "https://zoom.us/j/663343730",
      "phone": "(669) 900-6833",
      "code": "663343730#",
      "notes": "15 minute speaker, tag participation followed by raise your hand",
      "military": 20
  },
  {
      "name": "Participation - A Meeting Called Laura",
      "day": "Sunday",
      "time": "8:30 PM",
      "link": "https://zoom.us/j/989884123?pwd=V2FISFhQaVlRckNsM0t0bFpiVGVPZz09",
      "phone": "(166) 990-06833",
      "code": "989884123#",
      "notes": "LGBTQ+ Speaker/Participation",
      "military": 20
  },
  {
      "name": "Promises Candlelight - Burbank Group",
      "day": "Sunday",
      "time": "9:00 PM",
      "link": "https://zoom.us/j/3667993329",
      "phone": "",
      "notes": "Candlelight",
      "military": 21
  },
  {
      "name": "Sunlight of the World Spirit - Speaker/Participation",
      "day": "Sunday",
      "time": "9:00 PM",
      "link": "https://zoom.us/j/951810083",
      "phone": "(669) 900-6833",
      "code": "951810083#",
      "notes": "Closed Meeting of Alcoholics Anonymous for those who identify as an alcoholic or have the desire to stop drinking.",
      "military": 21
  },
  {
      "name": "La Puente Center: Sunday Nights As Bill See It",
      "day": "Sunday",
      "time": "10:00 PM",
      "link": "https://zoom.us/j/5169726547",
      "phone": "",
      "notes": "Have your books handy! You pick your reading and share on it (As Bill Sees It only)",
      "military": 22
  },
  {
      "name": "Sunday Night Marina Center Late Night",
      "day": "Sunday",
      "time": "11:00 PM",
      "link": "https://zoom.us/j/579426584",
      "phone": "(669) 900-6833",
      "code": "579426584#",
      "notes": "15-20 Minute Speaker + Participation / Open Meeting",
      "military": 23
  }
];
db.Meeting.insertMany(meetingSeed).then(function(value) {
    console.log("Data inserted, "+ value.length);
  });