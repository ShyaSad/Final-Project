
const meetingSeed = [
  {
    name: "Big Book Comes Online",
    day: "Daily",
    time: "12:00 AM",
    link: "https://zoom.us/j/8941936932",
    phone: "(669) 900-6833",
    code: "8941936932#",
    notes:
      "Meditation and book study. Reading roulette style. Please raise your hand in the chat to read one paragraph , one share."
  },
  {
    name: "The Midnight Group",
    day: "Daily",
    time: "12:00 AM",
    link: "https://zoom.us/j/987270636",
    phone: "(669) 900-6833",
    code: "987270636#",
    notes: "Different Format Nightly (Step, Big Book, Speaker...)"
  },
  {
    name: "1am LA Late Night Open",
    day: "Daily",
    time: "1:00 AM",
    link: "https://zoom.us/j/370098074",
    phone: "",
    notes: "Open Participation"
  },
  {
    name: "2am LA Late Night Open",
    day: "Daily",
    time: "2:00 AM",
    link: "https://zoom.us/j/500669303",
    phone: "",
    notes: "Open Participation"
  },
  {
    name: "3am LA Late Night Open",
    day: "Daily",
    time: "3:00 AM",
    link: "https://zoom.us/j/785305507",
    phone: "",
    notes: "Open Participation"
  },
  {
    name: "There is a Solution Zoom Group Los Angeles",
    day: "Daily",
    time: "3:00 AM",
    link: "https://zoom.us/j/798916683",
    phone: "(720) 707-2699",
    code: "798916683#",
    notes: "OPen Meeting of Alcoholics Anonymous"
  },
  {
    name: "4am LA Late Night Open",
    day: "Daily",
    time: "4:00 AM",
    link: "https://zoom.us/j/316795186",
    phone: "",
    notes: "Open Participation"
  },
  {
    name: "5am LA Late Night Open",
    day: "Daily",
    time: "5:00 AM",
    link: "https://zoom.us/j/220102441",
    phone: "",
    notes: "Open Participation"
  },
  {
    name: "Dunsmore Sunrise Group",
    day: "Daily",
    time: "6:00 AM",
    link: "https://zoom.us/j/2165011110",
    phone: "",
    notes: "Open Participation"
  },
  {
    name: "185 Attitude Adjustment",
    day: "Daily",
    time: "6:15 AM",
    link: "https://zoom.us/j/780182876",
    phone: "",
    notes: "Daily Reflections and Open Participation"
  },
  {
    name: "Monrovia Attitude Adjustment",
    day: "Daily",
    time: "6:15 AM",
    link: "https://zoom.us/j/506579020",
    phone: "(669) 900-6833",
    code: "506579020#",
    notes: "Zoom line will open at 6:00am. Non-smoking...or not."
  },
  {
    name: "Pasadena Sunrise AA Groups [Daily]",
    day: "Daily",
    time: "6:15 AM",
    link: "https://zoom.us/j/541832240",
    phone: "(669) 900-6833",
    code: "541832240#",
    notes:
      "Daily Sun-Sat - 15 min lead, participation. Open meeting, all welcome!"
  },
  {
    name: "Attitude Adjustment (South Pasadena) (Mon-Fri)",
    day: "Daily",
    time: "6:30 AM",
    link: "https://zoom.us/j/687505283?pwd=VVdzTTl4N3pxaEVHZFNVODhKU09XUT09",
    phone: "(720) 707-2699",
    code: "687505283#\nPassword: 974641#",
    notes: "Monday - Friday, Daily Readings, Participation"
  },
  {
    name:
      "Hole In The Sky - Spiritual Discussion\n(M-F 6:45am - Sat/Sun 8:00am)",
    day: "Daily",
    time: "6:45 AM",
    link: "https://zoom.us/j/705311870",
    phone: "(669) 900-6833",
    code: "705311870#",
    notes: "Participation - (M-F 6:45am - Sat/Sun 8:00am)"
  },
  {
    name: "7am Sun Up Online",
    day: "Daily",
    time: "7:00 AM",
    link: "https://zoom.us/j/101337417?pwd=NFRWYVhONHYwdFBOSmVtSXd6RUtMdz09",
    phone: "(669) 900-6833",
    code: "101337417#",
    notes: "Participation"
  },
  {
    name: "Good Morning Malibu (Mon-Fri)",
    day: "Daily",
    time: "7:00 AM",
    link: "https://zoom.us/j/526291596",
    phone: "(669) 900-9128",
    code: "526291596#",
    notes:
      "Monday-Friday Only. Daily Reflections, 5-min speaker lead then sharing, all welcome"
  },
  {
    name: "New Day Dawning",
    day: "Daily",
    time: "7:00 AM",
    link: "https://zoom.us/j/719558005",
    phone: "(669) 900-6833",
    code: "719558005#",
    notes: "Daily Reflections then open sharing, men’s stag"
  },
  {
    name: "Winner’s Attitude Adjustment",
    day: "Daily",
    time: "7:00 AM",
    link: "https://zoom.us/j/821573122",
    phone: "",
    notes: "10 minute speaker then participation"
  },
  {
    name: "Winners Attitude Adjustment",
    day: "Daily",
    time: "7:00 AM",
    link: "https://waacolfax.com/",
    phone: "",
    notes: "Open Speaker Meeting, 1 hour"
  },
  {
    name: "11th Step Morning Meditation Meeting",
    day: "Daily",
    time: "7:30 AM",
    link: "https://zoom.us/j/258947560",
    phone: "(669) 900-9128",
    code: "258947560#",
    notes: "20min mediation + open share"
  },
  {
    name: "Eastsiders Morning Men’s Group (M)",
    day: "Daily",
    time: "8:30 AM",
    link: "https://zoom.us/j/986722362",
    phone: "",
    notes: "Speaker + Participation + Meditation. 1 hour."
  },
  {
    name: "Sober Voices",
    day: "Daily",
    time: "9:00 AM",
    link: "Phone Only",
    phone: "(712) 432-0075",
    code: "654443#",
    notes: "This happens every day, virus or no virus!"
  },
  {
    name: "Zoom GM 9AM Big Book Study (W)",
    day: "Daily",
    time: "9:00 AM",
    link: "https://zoom.us/j/250324202",
    phone: "(669) 900-6833",
    code: "250324202#",
    notes: "Women and Non-Binary meeting. Participation"
  },
  {
    name: "9:30am Mid Morning Relfections",
    day: "Daily",
    time: "9:30 AM",
    link: "https://ZoomAlano.com/",
    phone: "",
    notes: "Daily Reflections -"
  },
  {
    name: "Mid Morning Reflection (Mon-Fri)",
    day: "Daily",
    time: "9:30 AM",
    link: "https://ZoomAlano.com",
    phone: "(669) 900-6833",
    code: "2493237899#",
    notes: "M-F Daily Reflection (Thursday 12&12)"
  },
  {
    name: "Grupo Santo Domingo (Spanish-Speaking)",
    day: "Daily",
    time: "10:00 AM",
    link: "https://zoom.us/j/2573518178",
    phone: "",
    notes: "Spanish (from Nicargua)"
  },
  {
    name: "Tribeca East West NY/LA",
    day: "Daily",
    time: "10:00 AM",
    link: "https://zoom.us/j/561373578",
    phone: "(669) 900-9128",
    code: "561373578#",
    notes: "Speaker/step/literature you name it!"
  },
  {
    name: "Crenshaw Daily Noon Meeting",
    day: "Daily",
    time: "12:00 PM",
    link: "https://zoom.us/j/9973074521",
    phone: "(669) 900-9128",
    code: "9973074521#",
    notes: "Participation"
  },
  {
    name: "The Hand Of AA - Noon Meeting",
    day: "Daily",
    time: "12:00 PM",
    link: "https://zoom.us/j/230888618?pwd=THpkRUxaTGVsSGwyVXl4aUlJaVBNZz09",
    phone: "(669) 900-9128",
    code: "230888618#\nPassword: elephant",
    notes: "Speaker & Participation Meeting"
  },
  {
    name: "Pathfinders - (Mon-Sat)",
    day: "Daily",
    time: "12:30 PM",
    link: "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
    phone: "",
    notes: "Monday-Saturday Only."
  },
  {
    name: "PG & Chill After Lunch Daily AA Meeting",
    day: "Daily",
    time: "1:00 PM",
    link: "https://zoom.us/j/802496652",
    phone: "(669) 900-6833",
    code: "802496652#",
    notes: "Open AA Speaker Meeting + Participation"
  },
  {
    name: "12 Step Zoom Call",
    day: "Daily",
    time: "2:00 PM",
    link: "https://zoom.us/j/9252658366",
    phone: "(646) 876-9923",
    code: "9252658366#",
    notes: ""
  },
  {
    name: "Come one, come all",
    day: "Daily",
    time: "3:00 PM",
    link: "https://zoom.us/j/534461531",
    phone: "",
    notes: "Participation meeting"
  },
  {
    name: "Covina 5pm Ruff Cut",
    day: "Daily",
    time: "5:00 PM",
    link: "https://zoom.us/j/101337417?pwd=NFRWYVhONHYwdFBOSmVtSXd6RUtMdz09",
    phone: "",
    notes: "Leader / Participation"
  },
  {
    name: "Spanish-Speaking Meeting",
    day: "Daily",
    time: "5:00 PM",
    link: "https://zoom.us/j/2573518178",
    phone: "",
    notes: "Spanish (Nicaragua)"
  },
  {
    name: "Women’s Meeting (W)",
    day: "Daily",
    time: "5:00 PM",
    link: "Phone only",
    phone: "(712) 770-8097",
    code: "275681#",
    notes: "Women’s Meeting (Normally takes place every Monday at 5pm.)"
  },
  {
    name: "This Too Shall Pass",
    day: "Daily",
    time: "5:30 PM",
    link: "https://zoom.us/j/486776455",
    phone: "(253) 215-8782",
    code: "486776455#",
    notes: "Open Participation"
  },
  {
    name: "How it Works Westwood",
    day: "Daily",
    time: "5:30 PM",
    link: "https://zoom.us/j/935462500",
    phone: "",
    notes: "Book study & round robin sharing"
  },
  {
    name: "Namaste At Home - (Mon-Fri)",
    day: "Daily",
    time: "6:00 PM",
    link: "https://zoom.us/j/491668871",
    phone: "(301) 715-8592",
    code: "461668871#",
    notes: "Monday-Friday Only. 10 Minute Speaker - Participation Meeting"
  },
  {
    name: "1 Day At A Time Group",
    day: "Daily",
    time: "7:00 PM",
    link: "https://zoom.us/j/773878425",
    phone: "(646) 876-9923",
    code: "773878425",
    notes: "15 min speaker discussion"
  },
  {
    name: "Sober Voices",
    day: "Daily",
    time: "7:00 PM",
    link: "Phone Only",
    phone: "(712) 432-0075",
    code: "654443#",
    notes: "This happens every day!"
  },
  {
    name: "Bare Bones",
    day: "Daily",
    time: "10:00 PM",
    link: "https://zoom.us/j/290442863",
    phone: "(669) 900-6833",
    code: "290442863#",
    notes: "Speaker meeting every day. 12 and 12 reading on Wednesdays."
  },
  {
    name: "HP>COVID-19",
    day: "Daily",
    time: "10:00 PM",
    link: "https://zoom.us/j/106218429",
    phone: "(669) 900-6833",
    code: "106218429#",
    notes: "Speaker/Participation (1hr)"
  },
  {
    name: "Hollywood Late Night",
    day: "Daily",
    time: "11:30 PM",
    link: "https://zoom.us/j/7863304070",
    phone: "(669) 900-6833",
    code: "7863304070#",
    notes: "Speaker/Participation/Heckling/Rule #62"
  },
  {
    name: "5:30am Valley Club Big Book Study",
    day: "Monday",
    time: "5:30 AM",
    link: "https://zoom.us/j/664561304",
    phone: "",
    notes: "Big Book Study & Participation"
  },
  {
    name: "The Early Show",
    day: "Monday",
    time: "6:00 AM",
    link: "https://zoom.us/j/121338280?pwd=cU0vVDU4djV1ZU9kL0Z6SWpSNXdjUT09",
    phone: "",
    notes: "Open meeting M-F, daily reading and sharing from As Bill Sees It"
  },
  {
    name: "Attitude Adjustment (Hermosa/SBAC)",
    day: "Monday",
    time: "6:45 AM",
    link: "https://zoom.us/j/995542340",
    phone: "",
    notes: "Open, Mixed"
  },
  {
    name: "Shivering Denizens",
    day: "Monday",
    time: "7:00 AM",
    link: "Phone Only",
    phone: "(712) 775-7031",
    code: "476889603#",
    notes: "Meeting code: 476-889-603#"
  },
  {
    name: "Shivering Denizens 7 AM Mondays Tropical",
    day: "Monday",
    time: "7:00 AM",
    link: "https://zoom.us/j/492925191",
    phone: "(669) 900-6833",
    code: "492925191#",
    notes: "15 min speaker"
  },
  {
    name: "Gateway Daily Reflections",
    day: "Monday",
    time: "7:15 AM",
    link: "https://zoom.us/j/376641935",
    phone: "(669) 900-9128",
    code: "5059199137#",
    notes:
      "15 minute Speaker participation meeting on the day’s Daily Reflection"
  },
  {
    name: "Unurban Santa Monica Daily Reflections",
    day: "Monday",
    time: "7:15 AM",
    link: "https://zoom.us/j/388163992",
    phone: "(669) 900-6833",
    code: "388163992#",
    notes: "Speaker/Participation"
  },
  {
    name: "Log Cabin Promises Meeting",
    day: "Monday",
    time: "7:30 AM",
    link: "https://zoom.us/j/345226082",
    phone: "(301) 715-8592",
    code: "345226082#",
    notes: "Promises meeting"
  },
  {
    name: "What It’s Like Now- Hollywood and Gardner",
    day: "Monday",
    time: "7:30 AM",
    link: "https://zoom.us/j/813149355",
    phone: "(720) 707-2699",
    code: "813149355#",
    notes: "LGBTQ+, 25min speaker, participation"
  },
  {
    name: "Café Tropical 12 & 12, Speaker & Sharing",
    day: "Monday",
    time: "8:30 AM",
    link: "https://zoom.us/j/490314511",
    phone: "",
    notes:
      "1 hour. All read from 12 & 12 (please have your book ready), then 15 min Speaker, then raises hand sharing."
  },
  {
    name: "Alano Club Mtg- Daily Reflections",
    day: "Monday",
    time: "8:45 AM",
    link: "https://zoom.us/j/626796350",
    phone: "",
    notes: "15min Speaker followed by Sharing"
  },
  {
    name: "Coffee and Resentments",
    day: "Monday",
    time: "9:00 AM",
    link: "https://zoom.us/j/6509030970",
    phone: "",
    notes: "Speaker + Participation"
  },
  {
    name: "Good Morning Participation",
    day: "Monday",
    time: "9:00 AM",
    link: "https://zoom.us/j/103609895?pwd=TjlYRlk1ODA4ekhTMnhxaWtCRUJPdz09",
    phone: "(720) 707-2699",
    code: "103609895#",
    notes: "10-15min speaker, participation"
  },
  {
    name: "Tribeca East West",
    day: "Monday",
    time: "10:00 AM",
    link: "https://zoom.us/j/561373578",
    phone: "(669) 900-9128",
    code: "561373578#",
    notes: "New Yorkers in LA and NYC"
  },
  {
    name: "Womens Big Book Study 10am (W)",
    day: "Monday",
    time: "10:00 AM",
    link: "https://zoom.us/j/565769991",
    phone: "(480) 522-0551",
    code: "565769991#",
    notes:
      "Women’s Meeting. Read out of Big Book, Speaker Leads, Participation."
  },
  {
    name: "Century City Lunch Bunch",
    day: "Monday",
    time: "12:00 PM",
    link: "https://zoom.us/j/735918827",
    phone: "(301) 715-8592",
    code: "735918827#",
    notes: "15 minute speaker; participation"
  },
  {
    name: "Feelings Group - Joslyn Center",
    day: "Monday",
    time: "12:00 PM",
    link: "https://zoom.us/j/495349235",
    phone: "(669) 900-6833",
    code: "495349235#",
    notes: "Open meeting focused on sharing on a topic"
  },
  {
    name: "Hole In The Sky - AA Big Book Study",
    day: "Monday",
    time: "12:00 PM",
    link: "https://zoom.us/j/867060088",
    phone: "(669) 900-6833",
    code: "867060088#",
    notes: "Book Study"
  },
  {
    name: "Monday 12x12 St Philips Pasadena",
    day: "Monday",
    time: "12:00 PM",
    link: "http://zoom.us/j/570271499",
    phone: "(669) 900-9128",
    code: "570271499#",
    notes: "Book Study"
  },
  {
    name: "Monday Moorpark Speaker Meeting",
    day: "Monday",
    time: "12:00 PM",
    link: "https://zoom.us/j/6226590977",
    phone: "",
    notes: "10 min leader, 30 min speaker"
  },
  {
    name: "Monday Step It Up",
    day: "Monday",
    time: "12:00 PM",
    link: "https://zoom.us/j/335848766",
    phone: "(669) 900-6833",
    code: "335848766#",
    notes: "Step Study"
  },
  {
    name: "Monday WLA Co-Ed Speaker",
    day: "Monday",
    time: "12:00 PM",
    link: "https://zoom.us/j/931031420",
    phone: "",
    notes: "Co-ED Speaker Solution Oriented"
  },
  {
    name: "Valley Club Long Timer’s Meeting",
    day: "Monday",
    time: "12:00 PM",
    link: "https://zoom.us/j/606505709",
    phone: "(669) 900-9128",
    code: "606505709#",
    notes:
      "Participation - Sharing by Alcoholics with 5 Years of Sobriety or More"
  },
  {
    name: "WARG Online Meeting",
    day: "Monday",
    time: "12:00 PM",
    link: "https://zoom.us/j/5444707170",
    phone: "",
    notes: "Participation / Potentially Book Study"
  },
  {
    name: "Joslyn Park Not In Control Group Step Study",
    day: "Monday",
    time: "12:30 PM",
    link: "https://zoom.us/j/351932194",
    phone: "(669) 900-9128",
    code: "351932194#",
    notes: "Step study"
  },
  {
    name: "Pathfinders 12:30",
    day: "Monday",
    time: "12:30 PM",
    link: "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
    phone: "(346) 248-7799",
    code: "941672314#",
    notes: "Open Discussion"
  },
  {
    name: "Mid Afternoon Madness",
    day: "Monday",
    time: "3:00 PM",
    link: "https://zoom.us/j/240743991",
    phone: "(669) 900-6833",
    code: "240743991#",
    notes:
      "One hour meeting with a 10 minute speaker and participation from coast to coast. All are welcome."
  },
  {
    name: "Ladies Way of Life Open Step Meeting",
    day: "Monday",
    time: "5:00 PM",
    link: "https://zoom.us/j/881559374?pwd=ZkFOVDIwT215dFdBSUhtaUVvQjU5QT09",
    phone: "(312) 626-6799",
    code: "881559374#",
    notes: "Women’s Open Step"
  },
  {
    name: "Monday Monday Book Study",
    day: "Monday",
    time: "5:30 PM",
    link: "https://zoom.us/j/5814051781",
    phone: "(166) 990-06833",
    code: "5814051781#",
    notes: "Book Study, Participation"
  },
  {
    name: "Monday Night Marina Center Women’s Meeting (W)",
    day: "Monday",
    time: "5:30 PM",
    link: "https://bluejeans.com/462507690",
    phone: "",
    notes: "Big Book meeting, Women"
  },
  {
    name: "Problems abs Solutions Men’s Stag",
    day: "Monday",
    time: "5:30 PM",
    link: "https://zoom.us/j/450357328",
    phone: "(669) 900-6833",
    code: "450357328#",
    notes: "Men’s Meeting"
  },
  {
    name: "12 and 12 Group",
    day: "Monday",
    time: "6:00 PM",
    link: "https://zoom.us/j/8075993894",
    phone: "",
    notes: "LGBTQA 1 hour/Select page from "
  },
  {
    name: '15 minute speaker followed by participation."',
    day: "",
    time: "",
    link: "",
    phone: "",
    notes: ""
  },
  {
    name: "AA Happy Hour Meeting (Melrose & Mansfield)",
    day: "Monday",
    time: "6:00 PM",
    link: "https://BrightHeartHealth.zoom.us/j/6388890741",
    phone: "(669) 900-6833",
    code: "6388890741#",
    notes: "Meeting code: 638 889 0741"
  },
  {
    name: "AT Center Monday Night 6 PM Newcomers Meeting",
    day: "Monday",
    time: "6:00 PM",
    link: "https://zoom.us/j/866130999?pwd=V1R5T2tBYzRHdmgrTFhUam5VQ3d3UT09",
    phone: "(669) 900-9128",
    code: "866130999#",
    notes: "1 Hour ish"
  },
  {
    name: "Balancing Act",
    day: "Monday",
    time: "6:00 PM",
    link: "https://zoom.us/j/914562034",
    phone: "",
    notes: "15min speaker"
  },
  {
    name: "Friends of Brian - Men’s Stag",
    day: "Monday",
    time: "6:00 PM",
    link: "https://zoom.us/j/225696773",
    phone: "",
    notes: "Men’s Meeting"
  },
  {
    name: "Hole In The Sky - Men’s Stag (M)",
    day: "Monday",
    time: "6:00 PM",
    link: "https://zoom.us/j/178832291",
    phone: "(669) 900-6833",
    code: "178832291#",
    notes: "Men’s Stag, Participation"
  },
  {
    name: "How It Works At Home",
    day: "Monday",
    time: "6:00 PM",
    link: "https://zoom.us/j/238603942",
    phone: "(166) 990-09128",
    code: "238603942#",
    notes: "1 hour speaker participation meeting"
  },
  {
    name: "Life After 10",
    day: "Monday",
    time: "6:00 PM",
    link: "https://zoom.us/j/8401268690",
    phone: "(669) 900-6833",
    code: "8401268690#",
    notes: ""
  },
  {
    name: "Men’s Cross talk- Burbank Group",
    day: "Monday",
    time: "6:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "1 hour Mens meeting unless otherwise stated"
  },
  {
    name: "Valley Club Women’s Meeting - Monday (W)",
    day: "Monday",
    time: "6:00 PM",
    link: "https://zoom.us/j/752184443",
    phone: "",
    notes:
      "Open 1 hour Women’s Meeting. Leader / Participation. Secretaries: Annie P. / Rose B."
  },
  {
    name: "WestWing Women (W)",
    day: "Monday",
    time: "6:00 PM",
    link: "https://zoom.us/j/182982885",
    phone: "",
    notes: "Women’s Meeting, 10 minute speaker, sharing by show of hands"
  },
  {
    name: "Third of July",
    day: "Monday",
    time: "6:15 PM",
    link: "https://zoom.us/j/511801021",
    phone: "(669) 900-6833",
    code: "511801021#",
    notes: "Speaker/Participation"
  },
  {
    name: "It’s Come to This Book Study (Hollywood LGBT Center)",
    day: "Monday",
    time: "6:15 PM",
    link: "https://zoom.us/j/8155607901",
    phone: "",
    notes: "LGBT+, Book study, participation"
  },
  {
    name: "Godshots 12 & 12 Candlelight",
    day: "Monday",
    time: "6:30 PM",
    link: "https://zoom.us/j/627636001",
    phone: "(669) 900-6833",
    code: "627636001#",
    notes: "Closed, Speaker, 12 Steps & 12 Traditions"
  },
  {
    name: "Adventures in Sobriety",
    day: "Monday",
    time: "7:00 PM",
    link: "https://zoom.us/j/618599751",
    phone: "(669) 900-9128",
    code: "618599751#",
    notes: "Speaker + Participation"
  },
  {
    name: "Monday Night PG & Chill",
    day: "Monday",
    time: "7:00 PM",
    link: "https://zoom.us/j/802496652",
    phone: "(166) 990-06833",
    code: "802496652",
    notes: "Open AA Meeting Speaker + Particpation"
  },
  {
    name: "As Bill Sees It Glenkirk",
    day: "Monday",
    time: "7:00 PM",
    link: "https://zoom.us/j/954885601",
    phone: "",
    notes: "As Bill Sees it 10 minute speaker"
  },
  {
    name: "BYOB Monday Camden Beverly Hills",
    day: "Monday",
    time: "7:00 PM",
    link: "https://zoom.us/j/559990368",
    phone: "(669) 900-9128",
    code: "559990368#",
    notes: ""
  },
  {
    name: "Sobriety Together",
    day: "Monday",
    time: "7:00 PM",
    link: "https://zoom.us/j/451395134",
    phone: "(669) 900-9128",
    code: "451395134#",
    notes: "Open Topic Discussion"
  },
  {
    name: "We Are Not Saints Monday Women’s Meeting (W)",
    day: "Monday",
    time: "7:00 PM",
    link: "https://zoom.us/j/815530174",
    phone: "(669) 900-6833",
    code: "815530174#",
    notes: "Women’s Meeting, 10min speaker"
  },
  {
    name: "Miracle Mondays (Melrose & Mansfield)",
    day: "Monday",
    time: "7:15 PM",
    link: "https://zoom.us/j/296722399",
    phone: "(669) 900-6833",
    code: "296722399#",
    notes: ""
  },
  {
    name: "66 W. Duarte Road Monday Night Speaker",
    day: "Monday",
    time: "7:30 PM",
    link: "https://zoom.us/j/768129948",
    phone: "(669) 900-6833",
    code: "768129948#",
    notes: "40 minute speaker meeting."
  },
  {
    name: "Anything Goes",
    day: "Monday",
    time: "7:30 PM",
    link: "https://nuorder.zoom.us/j/2434298005",
    phone: "",
    notes: "Open Meeting; Discussion/15-20 Min Speaker"
  },
  {
    name: "Monday Night Big Book Study",
    day: "Monday",
    time: "7:30 PM",
    link: "https://zoom.us/j/2772989071",
    phone: "(669) 900-6833",
    code: "2772989071#",
    notes:
      "Closed Big Book & 12/12 Study - Text or Call Molly if needing help 323-497-7978"
  },
  {
    name: "Monday Night Lack of Dilemma Group (Dogpark Meeting)",
    day: "Monday",
    time: "7:30 PM",
    link: "https://zoom.us/j/4115523942",
    phone: "",
    notes: "(Dogpark Meeting)"
  },
  {
    name: "West LA 12 Step Study Group",
    day: "Monday",
    time: "7:30 PM",
    link: "https://zoom.us/j/6660676860",
    phone: "(166) 990-09128",
    code: "6660676860#",
    notes: "Step Study, Speaker, Participation"
  },
  {
    name: "Writing in Sobriety, Pacific Palisades",
    day: "Monday",
    time: "7:30 PM",
    link: "https://zoom.us/j/424359415?pwd=WlFaODBXQXNoaHFXUEwxRkVNN1BSdz09",
    phone: "(166) 990-09128",
    code: "424359415# US",
    notes:
      "Closed meeting, 15 to 20 min speaker, participation for creatives to share in a safe space"
  },
  {
    name: "Monday Night Ohio",
    day: "Monday",
    time: "7:50 PM",
    link: "https://zoom.us/j/802496652",
    phone: "(669) 900-6833",
    code: "802496652#",
    notes: "AA Speaker Meeting + Participation"
  },
  {
    name: "God, Women, and Money (Men’s Meeting)",
    day: "Monday",
    time: "8:00 PM",
    link: "https://zoom.us/j/555751179",
    phone: "1-669-900-9128",
    code: "555751179#",
    notes: "Silver Lake - Men’s Meeting Speaker Participation"
  },
  {
    name: "Home Group Speaker Meeting",
    day: "Monday",
    time: "8:00 PM",
    link: "https://zoom.us/j/903365714",
    phone: "(408) 638-0968",
    code: "903365714#",
    notes: "90 +/- minute speaker meeting"
  },
  {
    name: "Language Of The Heart (W)",
    day: "Monday",
    time: "8:00 PM",
    link: "https://zoom.us/j/177466392",
    phone: "(669) 900-6833",
    code: "177466392#",
    notes: "Women’s Meeting"
  },
  {
    name: "Monday Alvarado / Echo Park AA",
    day: "Monday",
    time: "8:00 PM",
    link: "https://zoom.us/j/407791695",
    phone: "(669) 900-6833",
    code: "407791695#",
    notes: "Open meeting - 15min Speaker / Participation"
  },
  {
    name: "Monday Brunswick Participation",
    day: "Monday",
    time: "8:00 PM",
    link: "https://zoom.us/j/311400810?pwd=TE9HMjRLdUdROUNxd2pucmFCVis2UT09",
    phone: "(408) 638-0968",
    code: "311400810#\nMeeting password: 137377",
    notes: "Meeting password: 137377"
  },
  {
    name: "Monday Madness-Burbank Group",
    day: "Monday",
    time: "8:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Open participation meeting.. 1 hour, unless stated longer"
  },
  {
    name: "ORG Speaker",
    day: "Monday",
    time: "8:00 PM",
    link: "https://zoom.us/j/442211074",
    phone: "",
    notes: ""
  },
  {
    name: "The Week That Was Men’s Stag",
    day: "Monday",
    time: "8:00 PM",
    link: "https://zoom.us/j/163911406",
    phone: "(619) 900-6833",
    code: "163911406#",
    notes: "Men only, 1.5 hours, speaker, participation"
  },
  {
    name: "Wobblies (M)",
    day: "Monday",
    time: "8:00 PM",
    link: "https://zoom.us/j/876785173",
    phone: "",
    notes: "Men’s meeting, Open, 15 min lead, tag participation"
  },
  {
    name: "Solutions in the 12x12",
    day: "Monday",
    time: "8:00 PM",
    link: "https://zoom.us/j/575478602?pwd=ck5pWDAzZjhnc2c1clB2cFdCYUI5dz09",
    phone: "(166) 990-06833",
    code: "575478602#",
    notes: "12 and 12 meeting"
  },
  {
    name: "Weekly Reprieve (AT Center)",
    day: "Monday",
    time: "8:00 PM",
    link: "https://zoom.us/j/333794935",
    phone: "Meeting ID 333794935",
    notes:
      "Non Binary/trans/women’s meeting\nusually in Unity Room at AT Center"
  },
  {
    name: "Monday Night Mumblers (South Pasadena)",
    day: "Monday",
    time: "8:15 PM",
    link: "https://aa24x7.com",
    phone: "(669) 900-6833",
    code: "5042974103#",
    notes:
      "AA24x7.com can help other meetings get online (without the 40 minute limit and avoid other restrictions)"
  },
  {
    name: "Night Light Women’s Stag (W)",
    day: "Monday",
    time: "8:30 PM",
    link: "https://zoom.us/j/634220479",
    phone: "",
    notes: "Women’s Meeting, 10min speaker, participation"
  },
  {
    name: "Powerless Group IV",
    day: "Monday",
    time: "8:30 PM",
    link: "https://zoom.us/j/999438467",
    phone: "(669) 900-9128",
    code: "999438467#",
    notes:
      "mixed meeting, 15min speaker on As Bill Sees It, voluntary participation"
  },
  {
    name: "Candlelight - Burbank Group",
    day: "Monday",
    time: "10:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "open meeting.. 1 hour unless stated"
  },
  {
    name: "Principles Before Pandemic - Late Night",
    day: "Monday",
    time: "10:00 PM",
    link: "https://zoom.us/j/230937550",
    phone: "(408) 638-0968",
    code: "230937550#",
    notes: "Reading from As Bill Sees It, 10 Min Speaker + Participation"
  },
  {
    name: "5:30am Valley Club Big Book Passage",
    day: "Tuesday",
    time: "5:30 AM",
    link: "https://zoom.us/j/664561304",
    phone: "",
    notes: "Leader brings passage of Big Book making that the meeting’s topic"
  },
  {
    name: "The Early Show",
    day: "Tuesday",
    time: "6:00 AM",
    link: "https://zoom.us/j/121338280?pwd=cU0vVDU4djV1ZU9kL0Z6SWpSNXdjUT09",
    phone: "",
    notes: "Open meeting M-F, daily reading and sharing from As Bill Sees It"
  },
  {
    name: "Attitude Adjustment (Hermosa/SBAC)",
    day: "Tuesday",
    time: "6:45 AM",
    link: "https://zoom.us/j/928137020",
    phone: "",
    notes: "Open, Mixed, Participation"
  },
  {
    name: "The Shivering Denizens Big Book Meeting",
    day: "Tuesday",
    time: "7:00 AM",
    link: "https://zoom.us/j/766444383?pwd=OUkrU0pSQ2F5eDlIVy95TXVVbTNHUT09",
    phone: "(669) 900-9128",
    code: "766444383#\nPassword: 048562",
    notes: "Meeting code: 766 444 383 Password: 048562"
  },
  {
    name: "Sobriety 101",
    day: "Tuesday",
    time: "7:15 AM",
    link: "https://zoom.us/j/8998235722",
    phone: "",
    notes: "Open, Speaker, Discussion"
  },
  {
    name: "Unurban Santa Monica Big Book",
    day: "Tuesday",
    time: "7:15 AM",
    link: "https://zoom.us/j/388163992",
    phone: "(669) 900-6833",
    code: "388163992#",
    notes: "Speaker/Participation"
  },
  {
    name: "Hollywood & Gardner 12x 12 Virtual",
    day: "Tuesday",
    time: "7:30 AM",
    link: "https://zoom.us/j/394490468",
    phone: "(669) 900-9128",
    code: "394490468#",
    notes: "LGBTQ+ 12 Steps & 12 Traditions Book Meeting"
  },
  {
    name: "WHRC Step Time Tuesday",
    day: "Tuesday",
    time: "7:45 AM",
    link: "https://zoom.us/j/4579623132",
    phone: "(669) 900-9128",
    code: "4579623132#",
    notes: "Speaker 12 and 12 participation meeting"
  },
  {
    name: "Good Morning Big Book Discussion Meeting of Alcoholics Anonymous",
    day: "Tuesday",
    time: "9:00 AM",
    link: "https://zoom.us/j/350913144",
    phone: "(669) 900-9128",
    code: "350913144#",
    notes: "5min Reading from Big Book, 15min speaker, participation"
  },
  {
    name: "Growing Into Ladies (W)",
    day: "Tuesday",
    time: "9:00 AM",
    link: "https://zoom.us/j/285617644?pwd=QlNMeGlTR1NyRVFIQzRLY3hoZk9UQT09",
    phone: "",
    notes: "Women’s Meeting. Speaker + Participation."
  },
  {
    name: "Women Seeking Serenity",
    day: "Tuesday",
    time: "9:30 AM",
    link: "https://zoom.us/j/4358362050",
    phone: "",
    notes: "Women, 3 min Meditation, 5 min Speaker, Open Participation"
  },
  {
    name: "One Day At A Time BH Women’s Meeting (W)",
    day: "Tuesday",
    time: "10:00 AM",
    link: "https://zoom.us/j/228624710",
    phone: "(669) 900-9128",
    code: "228624710#",
    notes: "Women’s meeting. Speaker + Discussion."
  },
  {
    name: "LIVING IN THE SOLUTION Women’s 12&12 (W)",
    day: "Tuesday",
    time: "10:00 AM",
    link: "https://zoom.us/j/657489263?pwd=eXpiVE94MUp5T20yUTBvQVpySjlrZz09",
    phone: "",
    notes: "Dumetz Women’s 12&12 Literature Study, leader, participation"
  },
  {
    name: "Broad Highway Noon Yosemite Meeting",
    day: "Tuesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/858791214",
    phone: "",
    notes: "10min Speaker + Participation"
  },
  {
    name: "Century City Lunch Bunch",
    day: "Tuesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/465543041",
    phone: "",
    notes: "Step Study"
  },
  {
    name: "Drunk Collection",
    day: "Tuesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/2348822873",
    phone: "(669) 900-6833",
    code: "2348822873#",
    notes: "Big Book Study-short 40 min"
  },
  {
    name: "Hole In The Sky - 12&12 Book Study",
    day: "Tuesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/295712428",
    phone: "(669) 900-6833",
    code: "295712428#",
    notes: "12&12 book study, participation"
  },
  {
    name: "Midday Matinee (Farmers Market)",
    day: "Tuesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/818339406",
    phone: "",
    notes: "Room open at 11:30a for meeting before the meeting"
  },
  {
    name: "Rainbow Bar & Grill Sunset Blvd",
    day: "Tuesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/5178522788",
    phone: "(669) 900-6833",
    code: "5178522788#",
    notes: "20 Min Speaker // Tag Participation"
  },
  {
    name: "Tuesday WLA Men’s Stag Speaker Meeting (M)",
    day: "Tuesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/931031420",
    phone: "",
    notes: "Men’s Stag Speaker Meeting - Solution Oriented"
  },
  {
    name: "WARG Online Participation Meeting",
    day: "Tuesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/5444707170",
    phone: "(669) 900-6833",
    code: "5444707170#",
    notes: "15 minute speaker"
  },
  {
    name: "Pathfinders 12:30",
    day: "Tuesday",
    time: "12:30 PM",
    link: "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
    phone: "(346) 248-7799",
    code: "941672314#",
    notes: "Open Discussion"
  },
  {
    name: "Tribeca East West",
    day: "Tuesday",
    time: "12:30 PM",
    link: "https://zoom.us/j/351932194",
    phone: "(669) 900-9128",
    code: "561373578#",
    notes: "New Yorkers in LA and NYC"
  },
  {
    name: "Feel It & Say It",
    day: "Tuesday",
    time: "12:30 PM",
    link: "https://zoom.us/j/646405249",
    phone: "(669) 900-6833",
    code: "646405249#",
    notes: "Closed, Women’s meeting, step study, speaker, participation"
  },
  {
    name: "Tuesday Midday AA",
    day: "Tuesday",
    time: "1:30 PM",
    link: "https://zoom.us/j/778025060",
    phone: "",
    notes: "participation"
  },
  {
    name: "The Self-Forgetters (Women’s Meeting)",
    day: "Tuesday",
    time: "4:00 PM",
    link: "https://liveclassroom.zoom.us/j/416206908",
    phone: "(408) 638-0968",
    code: "416206908#",
    notes: "Women’s Meeting, 10 min share, participation based"
  },
  {
    name: "11th Step Meditation",
    day: "Tuesday",
    time: "5:00 PM",
    link: "https://zoom.us/j/796947868",
    phone: "(301) 715-8592",
    code: "796947868#",
    notes: "11th Step Meditation + Group Sharing"
  },
  {
    name: "Big Book Bread and Butter",
    day: "Tuesday",
    time: "5:00 PM",
    link: "https://zoom.us/j/976362152?pwd=cnFzN1h0bms2THQ4RldXTTYzVkUydz09",
    phone: "(669) 900-9128",
    code: "976362152#",
    notes:
      "Joe & Charlie Big Book Comes Alive Audio for 10 minutes followed by a 10 minute speaker."
  },
  {
    name: "One Speaker",
    day: "Tuesday",
    time: "5:30 PM",
    link: "https://zoom.us/s/798123027?pwd=OGM0YTNGdWlZbStpVDFseVNTaTljdz09",
    phone: "(669) 900-9128",
    code: "618599751#",
    notes: "LGBTQ Open meeting"
  },
  {
    name: "Women’s After Work Meeting (W)",
    day: "Tuesday",
    time: "5:45 PM",
    link: "https://zoom.us/j/7634469228?pwd=bTZpeFhWSG50aWJzTUtuU3FGeXU3UT09",
    phone: "Meeting code: 763 446 9228\nPassword: girlpower",
    notes: "Women’s Meeting Big Book Study"
  },
  {
    name: "Arlington Beginners",
    day: "Tuesday",
    time: "6:00 PM",
    link: "https://zoom.us/j/898851298",
    phone: "(669) 900-9128",
    code: "898851298#",
    notes: "Oldest active group in Los Angeles! 1 hr/1 speaker Tu/Thu 8pm"
  },
  {
    name: "How It Works At Home",
    day: "Tuesday",
    time: "6:00 PM",
    link: "https://zoom.us/j/559147996?pwd=QU1DN0xXSGZnS1hIZmhBU3hEY0JPZz09",
    phone: "(669) 900-9128",
    code: "559147996#",
    notes: "1 hour speaker participation meeting"
  },
  {
    name: "Three Topic Discussion",
    day: "Tuesday",
    time: "6:00 PM",
    link: "https://zoom.us/j/6961815136",
    phone: "",
    notes: "Three topic discussion"
  },
  {
    name: "Topic Discussion - Burbank Group",
    day: "Tuesday",
    time: "6:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "open meeting.. 1 hour.. unless stated otherwise"
  },
  {
    name: "Women’s Topic Discussion",
    day: "Tuesday",
    time: "6:15 PM",
    link: "https://zoom.us/j/562932832",
    phone: "",
    notes: "Womens Meeting, speaker, topic discussion"
  },
  {
    name: "Cliffhangers Step Study Brentwood",
    day: "Tuesday",
    time: "6:30 PM",
    link: "https://zoom.us/j/722927811",
    phone: "(669) 900-6833",
    code: "722927811#",
    notes: "Step Study/10 min Speaker/Group Participation"
  },
  {
    name: "Tuesday After Work",
    day: "Tuesday",
    time: "6:30 PM",
    link: "https://zoom.us/j/402162935",
    phone: "(669) 900-6833",
    code: "402162935#",
    notes: "Open AA meeting, speaker and participation"
  },
  {
    name: "Women Working the Steps (W)",
    day: "Tuesday",
    time: "6:30 PM",
    link: "https://zoom.us/j/257466393",
    phone: "(669) 900-9128",
    code: "257466393#",
    notes: "Women’s Meeting"
  },
  {
    name: "Women’s Step Study",
    day: "Tuesday",
    time: "6:30 PM",
    link: "https://zoom.us/j/793636259?pwd=MWN6azhoZUFFZ1daRXdVZXhJSDFBUT09",
    phone: "(669) 900-6833",
    code: "793636259#",
    notes:
      "Women’s Meeting - Normal physical location is Brunswick in Silverlake"
  },
  {
    name: "Sunset Book Study",
    day: "Tuesday",
    time: "7:00 PM",
    link: "https://global.gotomeeting.com/join/854554933",
    phone: "(954) 415-0006\nMeeting code: 854554933",
    notes: "Book Study"
  },
  {
    name: "Tuesday PG & Chill Book Study",
    day: "Tuesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/802496652",
    phone: "(166) 990-06833",
    code: "802496652",
    notes: "Open AA Big Book Study + Participation"
  },
  {
    name: "BEGINNER’S MEETING",
    day: "Tuesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/496495411",
    phone: "",
    notes: "Speaker until 7:30PM / Participation until 8PM"
  },
  {
    name: "Foxy Ladies (W)",
    day: "Tuesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/9891560774?pwd=VFNFSGhFUEVNRFBjYTB4cXlTc1FnUT09",
    phone: "(669) 900-6833",
    code: "9891560774#",
    notes: "Women’s Meeting. Password: Foxyla"
  },
  {
    name: "Japanese Speaking AA Meeting",
    day: "Tuesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/6402199092",
    phone: "(301) 715-8592",
    code: "6402199092#",
    notes: "Speaker x Participation."
  },
  {
    name: "Santa Monica We Agnostics",
    day: "Tuesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/7798158542?pwd=aU1NWllJd3VIZEJLRnpPNGZCaHV0UT09",
    phone: "",
    notes:
      "Santa Monica Agnostics Meeting, 15 minute speaker then participation"
  },
  {
    name: "Sunset Book Study",
    day: "Tuesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/128842620?pwd=enBsZUpaZGtkYTBJWitDbVR4aHpKUT09",
    phone: "(669) 900-6833",
    code: "128842620#",
    notes: "Book Study"
  },
  {
    name: "12&12 Step Discussion",
    day: "Tuesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/618598650",
    phone: "(408) 638-0968",
    code: "618598650#",
    notes:
      "Weekly meeting of Alcoholics Anonymous with a group reading of the 12 Steps and 12 Traditions and participation sharing and a speaker the second Tuesday of the month."
  },
  {
    name: "Burning Desires",
    day: "Tuesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/984034540",
    phone: "",
    notes: "LGBT, Speaker Participation"
  },
  {
    name: "Eagle Rock and a Hard Place",
    day: "Tuesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/469788872",
    phone: "",
    notes: "Meditation meeting"
  },
  {
    name: "Get Real",
    day: "Tuesday",
    time: "7:30 PM",
    link: "https://nuorder.zoom.us/j/2434298005",
    phone: "",
    notes: "Open Meeting; Discussion/15-20 Min Speaker"
  },
  {
    name: "Misery Loves Company - AA - Arcadia",
    day: "Tuesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/695534021",
    phone: "",
    notes:
      "Open Meeting - 20 min leader share then participation - 1 hr 15 minutes"
  },
  {
    name: "Shoup Candlelight LGBT",
    day: "Tuesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/237583048",
    phone: "(669) 900-6833",
    code: "237583048#",
    notes: "Open LGBT speaker/participation"
  },
  {
    name: "Tuesday Night Q&A",
    day: "Tuesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/733238824",
    phone: "1-669-900-6833",
    code: "733238824#",
    notes: "Speaker/Q&A sharing by participants"
  },
  {
    name: "Unity Insures Recovery Through Service",
    day: "Tuesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/9081534155",
    phone: "(669) 900-6833",
    code: "9081534155#",
    notes: "Historical 12 & 12 & 12 Meeting @ St. Alban’s"
  },
  {
    name: "Unity Insures Recovery Through Service (580 Hilgard Westwood)",
    day: "Tuesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/9081534155",
    phone: "(669) 900-6833",
    code: "9081534155#",
    notes: "12&12 speaker meeting with voluntary sharing"
  },
  {
    name: "We Agnostics AA - Los Feliz",
    day: "Tuesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/825502262",
    phone: "(669) 900-6833",
    code: "825502262#",
    notes: "10 min speaker, followed by round robin sharing, 1.5 hour meeting"
  },
  {
    name: "We Agnostics AA - Los Feliz",
    day: "Tuesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/825502262",
    phone: "(669) 900-6833",
    code: "825502262#",
    notes: "10 min speaker, followed by round robin sharing, 1.5 hour meeting"
  },
  {
    name: "1401 Olympic Blvd, Santa Monica",
    day: "Tuesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/9891395775",
    phone: "(669) 900-9128",
    code: "9891395775#",
    notes: "LGBTQ+/Mixed/Open Meeting\n30 minute speaker (1 Hour Meeting)"
  },
  {
    name: "creAAtives",
    day: "Tuesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/530879406?pwd=VlY2MXR2UnU0Z2F1QU9qT2Q4R1FLdz09",
    phone: "(669) 900-6833",
    code: "530879406#\nPassword: 652947",
    notes: "Speaker + Participation"
  },
  {
    name: "Open Arms Book Study",
    day: "Tuesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/661310667",
    phone: "",
    notes: "Book Study & Participation"
  },
  {
    name: "Tuesday Night Candlelight",
    day: "Tuesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/195947977",
    phone: "(166) 990-06833",
    code: "195947977# Meeting code: 195947977",
    notes: "15 minute speaker, participation; open meeting"
  },
  {
    name: "Tuesday Night Vibe Check Meeting",
    day: "Tuesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/931191178",
    phone: "(166) 990-06833",
    code: "931191178# Meeting code: 931191178",
    notes: "20 min speaker with participation"
  },
  {
    name: "Venice Beach Men’s Stag (M)",
    day: "Tuesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/3223672492",
    phone: "(253) 215-8782",
    code: "3223672492#",
    notes: "Men’s Stag- 15 min share followed by involuntary sharing."
  },
  {
    name: "Westchester Tuesday Men’s Stag",
    day: "Tuesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/860803844",
    phone: "",
    notes: "Men’s Stag"
  },
  {
    name: "Roxbury Park",
    day: "Tuesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/528973760?pwd=b0NueEJNR0JtWVFvUHRqazYxZmk1Zz09",
    phone: "",
    notes: "Open, mixed, participation, 30 min speaker."
  },
  {
    name: "Sobriety Hour at Rose Hill",
    day: "Tuesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/473349532",
    phone: "(669) 900-9128",
    code: "473349532#",
    notes: "Big Book, Closed, Speaker, Discussion"
  },
  {
    name: "Yosemite Group",
    day: "Tuesday",
    time: "8:00 PM",
    link: "https://meet.google.com/qsf-bfvq-eac",
    phone: "(321) 549-7985\nPIN: ‪327 023 231#‬",
    notes: "Participation"
  },
  {
    name: "Namaste Sober",
    day: "Tuesday",
    time: "8:15 PM",
    link: "https://zoom.us/j/227513287",
    phone: "",
    notes: "Yoga and 11th step mediation meeting. 1 hour and 15 minutes."
  },
  {
    name: "Never Had A Legal Drink",
    day: "Tuesday",
    time: "8:15 PM",
    link: "https://zoom.us/j/5232270777",
    phone: "",
    notes: "Young People’s"
  },
  {
    name: "See You Next Tuesday",
    day: "Tuesday",
    time: "8:30 PM",
    link: "https://zoom.us/j/549916813",
    phone: "(669) 900-9128",
    code: "549916813#",
    notes: "Speaker, Participation"
  },
  {
    name: "Chapter 12 Big Book Study",
    day: "Tuesday",
    time: "9:00 PM",
    link: "https://zoom.us/j/428634440",
    phone: "(669) 900-6833",
    code: "428634440#",
    notes: "Big Book Study + participation"
  },
  {
    name: "Sunlight of the World Spirit - Speaker/Participation",
    day: "Tuesday",
    time: "9:00 PM",
    link: "https://zoom.us/j/951810083",
    phone: "(669) 900-6833",
    code: "951810083#",
    notes:
      "Closed Meeting of Alcoholics Anonymous for those who identify as an alcoholic or have the desire to stop drinking."
  },
  {
    name: "Candlelight - Burbank Group",
    day: "Tuesday",
    time: "10:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Candlelight.. 1 hour.. unless otherwise stated"
  },
  {
    name: "Principles Before Pandemic - Late Night",
    day: "Tuesday",
    time: "10:00 PM",
    link: "https://zoom.us/j/230937550",
    phone: "(408) 638-0968",
    code: "230937550#",
    notes: "Reading from As Bill Sees It, 10 min Speaker + Participation"
  },
  {
    name: "Radford Hall 10 PM",
    day: "Tuesday",
    time: "10:00 PM",
    link: "https://zoom.us/j/142401268?pwd=L1VvMWJyVS9KSmdyeGJ0amF4RHd2Zz09",
    phone: "(408) 638-0968",
    code: "142401268#",
    notes: "Speaker/Participation"
  },
  {
    name: "Tuesday Late Night Marina Center",
    day: "Tuesday",
    time: "11:00 PM",
    link: "https://zoom.us/j/354124760",
    phone: "(166) 990-06833",
    code: "354124760# Meeting code: 354124760",
    notes: "15-20 Minute Speaker + Participation / Open Meeting"
  },
  {
    name: "5:30am Valley Club 12x12",
    day: "Wednesday",
    time: "5:30 AM",
    link: "https://zoom.us/j/664561304",
    phone: "",
    notes: "12 x 12 Step Study"
  },
  {
    name: "The Early Show",
    day: "Wednesday",
    time: "6:00 AM",
    link: "https://zoom.us/j/121338280?pwd=cU0vVDU4djV1ZU9kL0Z6SWpSNXdjUT09",
    phone: "",
    notes: "Open meeting M-F, daily reading and sharing from As Bill Sees It"
  },
  {
    name: "7am Remotely Tropical",
    day: "Wednesday",
    time: "7:00 AM",
    link: "https://zoom.us/j/578392625",
    phone: "(669) 900-6833",
    code: "578392625#",
    notes: "12x12 Book Study"
  },
  {
    name: "Unurban Santa Monica Speaker",
    day: "Wednesday",
    time: "7:15 AM",
    link: "https://zoom.us/j/388163992",
    phone: "(669) 900-6833",
    code: "388163992#",
    notes: "Speaker/Participation"
  },
  {
    name: "Westside Alano Club Wednesday Morning Speaker",
    day: "Wednesday",
    time: "7:15 AM",
    link: "https://zoom.us/j/551764426?pwd=YzdnRHlYaEJZLzBhKzZhbWhKc21LQT09",
    phone: "(669) 900-9128",
    code: "551764426#",
    notes: "Mixed meeting, 15-20min speaker, participation"
  },
  {
    name: "Early Birds",
    day: "Wednesday",
    time: "7:30 AM",
    link: "https://zoom.us/j/8597175972",
    phone: "",
    notes: "LGBTQ, OPEN, Speaker/sharing"
  },
  {
    name: "Hollywood & Gardner Wednesday Morning",
    day: "Wednesday",
    time: "7:30 AM",
    link: "https://zoom.us/j/810717138",
    phone: "(669) 900-9128",
    code: "810717138#",
    notes:
      "LGBTQ+ Decade Day meeting, speaker has more than 10 years of continuous sobriety."
  },
  {
    name: "Logcabin Joy of Living",
    day: "Wednesday",
    time: "7:30 AM",
    link: "https://zoom.us/j/784972529",
    phone: "(253) 215-8782",
    code: "784972529#",
    notes: "20 Minute Speaker Participation"
  },
  {
    name: "Our Common Welfare (Molly’s)",
    day: "Wednesday",
    time: "7:30 AM",
    link: "https://zoom.us/j/999264377",
    phone: "(669) 900-9128",
    code: "999264377#",
    notes: "15min Speaker + Participation"
  },
  {
    name: "As Yet Untitled",
    day: "Wednesday",
    time: "8:30 AM",
    link: "https://zoom.us/j/123516953",
    phone: "(669) 900-6833",
    code: "123516953#",
    notes: "15min speaker + participation"
  },
  {
    name: "Live & Let Live Book Study (W)",
    day: "Wednesday",
    time: "8:30 AM",
    link: "https://zoom.us/j/6693410519",
    phone: "(669) 900-6833",
    code: "6693410519#",
    notes: "Women’s Meeting"
  },
  {
    name: "Progress Not Perfection",
    day: "Wednesday",
    time: "8:30 AM",
    link: "https://zoom.us/j/929836935",
    phone: "(669) 900-9128",
    code: "929836935#",
    notes: "Open meeting. 20 min speaker + participation."
  },
  {
    name: "Solutions in the Steps",
    day: "Wednesday",
    time: "9:00 AM",
    link: "https://zoom.us/j/524285583",
    phone: "",
    notes: "Speaker and participation"
  },
  {
    name: "Eagle Rock Wednesday",
    day: "Wednesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/320988993",
    phone: "(669) 900-6833",
    code: "320988993#",
    notes: "20 minute meditation followed by open sharing"
  },
  {
    name: "Gratitude",
    day: "Wednesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/9175702384",
    phone: "",
    notes: "Speaker, participation"
  },
  {
    name: "Hole In The Sky - Living Sober Book Study",
    day: "Wednesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/295712428",
    phone: "(669) 900-6833",
    code: "295712428#",
    notes: "Book Study"
  },
  {
    name: "Sober Sisters (W)",
    day: "Wednesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/3103831667",
    phone: "(669) 900-6833",
    code: "3103831667#",
    notes: "Women’s Meeting. Speaker + Participation. One hour meeting."
  },
  {
    name: "WARG Newcomers Meeting",
    day: "Wednesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/5444707170",
    phone: "(669) 900-6833",
    code: "5444707170#",
    notes: "Newcomers Meeting"
  },
  {
    name: "Wednesday Moorpark 12&12 Meeting",
    day: "Wednesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/7765714784",
    phone: "(669) 900-6833",
    code: "7765714784#",
    notes: "12&12 Reading, 15 min speaker, participation"
  },
  {
    name: "Wednesday Noon High Powered Sobriety Men’s Meeting",
    day: "Wednesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/292693719",
    phone: "",
    notes: "Men’s Stag, particpation"
  },
  {
    name: "Wednesday WLA Co-ED Speaker Meeting",
    day: "Wednesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/931031420",
    phone: "",
    notes: "Co-Ed Speaker Meeting - Solution Oriented"
  },
  {
    name: "Whats Happening Now",
    day: "Wednesday",
    time: "12:00 PM",
    link: "https://zoom.us/j/275670619",
    phone: "(669) 900-6833",
    code: "275670619#",
    notes: "20 minute Speaker Meeting"
  },
  {
    name: "How it Works--Joslyn Park",
    day: "Wednesday",
    time: "12:30 PM",
    link: "https://zoom.us/j/912912328",
    phone: "(669) 900-9128",
    code: "912912328#",
    notes: ""
  },
  {
    name: "Pathfinders 12:30",
    day: "Wednesday",
    time: "12:30 PM",
    link: "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
    phone: "(346) 248-7799",
    code: "941672314#",
    notes: "Open Discussion"
  },
  {
    name: "Try God/Universal Studios",
    day: "Wednesday",
    time: "12:30 PM",
    link: "https://zoom.us/j/630042121",
    phone: "",
    notes: "Speaker/participation"
  },
  {
    name: "Woman 2 Woman (W)",
    day: "Wednesday",
    time: "12:30 PM",
    link: "https://zoom.us/j/798684617?pwd=OG9rai9pMnExQ1ZUNWJWaGpsc1Q2dz09",
    phone: "(669) 900-9128",
    code: "798684617#\nPassword: 422612",
    notes: "Women’s meeting. Phone phone password: 422612"
  },
  {
    name: "Big Book Neat Group",
    day: "Wednesday",
    time: "3:00 PM",
    link: "https://zoom.us/j/502755096",
    phone: "(669) 900-6833",
    code: "502755096#",
    notes: "Big Book study"
  },
  {
    name: "Mid Afternoon Madness",
    day: "Wednesday",
    time: "3:00 PM",
    link: "https://zoom.us/j/240743991",
    phone: "(669) 900-6833",
    code: "240743991#",
    notes:
      "One hour meeting with a 10 minute speaker and participation from coast to coast. All are welcome."
  },
  {
    name: "11th Step Focus",
    day: "Wednesday",
    time: "5:00 PM",
    link: "https://liveclassroom.zoom.us/j/146143573",
    phone: "(166) 990-06833",
    code: "146143573#",
    notes: "Meditation for 10 minutes and different prayer topic every week"
  },
  {
    name: "El Segundo Women’s Meeting (W)",
    day: "Wednesday",
    time: "5:30 PM",
    link: "https://zoom.us/j/999871990",
    phone: "",
    notes: "Women’s Meeting"
  },
  {
    name: "In By 5:45, Out By 6:30",
    day: "Wednesday",
    time: "5:45 PM",
    link: "https://zoom.us/j/640622988",
    phone: "",
    notes: "45 min meeting"
  },
  {
    name: "Beginner’s Workshop - Hole In The Sky",
    day: "Wednesday",
    time: "6:00 PM",
    link: "https://zoom.us/j/609275263",
    phone: "(669) 900-6833",
    code: "609275263#",
    notes: "Beginner’s participation meeting"
  },
  {
    name: "Big Book Study - Burbank Group",
    day: "Wednesday",
    time: "6:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "BB study"
  },
  {
    name: "Life After 10",
    day: "Wednesday",
    time: "6:00 PM",
    link: "https://zoom.us/j/758877991",
    phone: "(669) 900-9128",
    code: "758877991#",
    notes: ""
  },
  {
    name: "Wednesday 12x12",
    day: "Wednesday",
    time: "6:00 PM",
    link: "http://zoom.us/j/337883625",
    phone: "",
    notes: "Step and Tradition book study"
  },
  {
    name: "Women’s Solutions Westside Alano Club",
    day: "Wednesday",
    time: "6:00 PM",
    link: "https://zoom.us/j/2728588136",
    phone: "",
    notes: "Women’s AA speaker/participation 90 min Closed"
  },
  {
    name: "Quitting Time west hollywood",
    day: "Wednesday",
    time: "6:30 PM",
    link: "https://zoom.us/j/5419924562?pwd=Y1E3VE9taGdWd2RHT0ExMm95K1dZZz09",
    phone: "",
    notes: "AA 12 step meeting - open meeting"
  },
  {
    name: "Acceptance Is The Answer",
    day: "Wednesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/604052611",
    phone: "(669) 900-6833",
    code: "604052611#",
    notes: "Open meeting, LGBT, 15 min speaker + participation."
  },
  {
    name: "Speakeasy Meeting",
    day: "Wednesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/711609691",
    phone: "(669) 900-6833",
    code: "711609691#",
    notes: "Young People’s Meeting, Speaker + Open Share"
  },
  {
    name: "Balancing Act",
    day: "Wednesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/914562034",
    phone: "",
    notes: "15min speaker"
  },
  {
    name: "How It Works Women’s (W)",
    day: "Wednesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/675575419?pwd=TTQzeUVpTDNmMysrRG9RWStQSnVhUT09",
    phone: "(669) 900-6833",
    code: "675575419#",
    notes: "Closed Women’s Meeting. Pswd: hope"
  },
  {
    name: "One Step At A Time",
    day: "Wednesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/765041825?pwd=cFVwL3VaMUkwVG9QRnRNTkV5REpDUT09",
    phone: "(669) 900-6833",
    code: "765041825#",
    notes: "20 min. Speaker followed by open sharing"
  },
  {
    name: "Wed Night 7pm The Solution Meeting (W)",
    day: "Wednesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/466544854?",
    phone: "",
    notes: "Women’s Meeting- The Solution, participation"
  },
  {
    name: "Women’s Participation - Sierra Madre (W)",
    day: "Wednesday",
    time: "7:00 PM",
    link: "https://zoom.us/j/602217192",
    phone: "(669) 900-6833",
    code: "602217192#",
    notes: "Women’s Meeting, 15 min speaker, participation, 90 mins"
  },
  {
    name: "Fun Bunch",
    day: "Wednesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/988538816",
    phone: "(301) 715-8592",
    code: "988538816#\nPassword: 849505",
    notes: "1.5 hr speaker participation meeting"
  },
  {
    name: "No Losers (Rodney & Prospect)",
    day: "Wednesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/509983319?pwd=d2dCQ2d1czZIRWw0bHJWdm54cjhtZz09",
    phone: "(720) 707-2699",
    code: "509983319#\nPassword: 696969",
    notes: "Speaker until 8pm + tagged sharing"
  },
  {
    name: "Solutions East Online Men’s Meeting (M)",
    day: "Wednesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/924976012",
    phone: "(669) 900-6833",
    code: "924976012#",
    notes: "Men’s Stag"
  },
  {
    name: "The Stronghold AA meeting",
    day: "Wednesday",
    time: "7:30 PM",
    link: "https://zoom.us/j/826046615",
    phone: "",
    notes:
      "Mixed meeting. 5 min meditation + 20 min share + 20 minute participation."
  },
  {
    name: "Beyond Baroque",
    day: "Wednesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/746731533",
    phone: "(166) 990-06833",
    code: "746731533# Meeting code: 746731533",
    notes: "Participation, Discussion"
  },
  {
    name: "Cover to Cover Big Book Study",
    day: "Wednesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/7732266890",
    phone: "",
    notes: "Book study and sharing"
  },
  {
    name: "Hollywood Young People’s Wednesday\nSpeaker/Participation",
    day: "Wednesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/535284646",
    phone: "",
    notes: "1 hour Young Peoples Speaker and participation"
  },
  {
    name: "Martel 5",
    day: "Wednesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/749816498?pwd=dlJ5TFVDcWNlWXhpNlgwd2J4ZmNwUT09",
    phone: "",
    notes: "LGBT open meeting"
  },
  {
    name: "Rule 62",
    day: "Wednesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/446816361",
    phone: "",
    notes: "Coed meeting, cross talk, speaker discussion"
  },
  {
    name: "Second and Hill",
    day: "Wednesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/422705733",
    phone: "",
    notes: "two speaker meeting"
  },
  {
    name: "Steps & Traditions Study - Burbank Group",
    day: "Wednesday",
    time: "8:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "12 & 12 study"
  },
  {
    name: "Highland Park/South Pasadena Legacy",
    day: "Wednesday",
    time: "8:15 PM",
    link: "https://aa24x7.com",
    phone: "(669) 900-6833 + code: 504 297 4103#",
    notes:
      "Speaker+Q&A AA24x7.com can get your meeting online fast and easy-tech probs R gone."
  },
  {
    name: "Principles Before Personalities",
    day: "Wednesday",
    time: "8:15 PM",
    link: "https://zoom.us/j/433375992",
    phone: "(669) 900-9128",
    code: "433375992#",
    notes: "Open, Speaker, Participation ... *Meeting room opens @ 8pm*"
  },
  {
    name: "Fight Club Online (Men’s Meeting)",
    day: "Wednesday",
    time: "8:30 PM",
    link: "https://zoom.us/j/337968927",
    phone: "",
    notes: "Men’s Meeting. Cross Talk."
  },
  {
    name: "Wednesday Night Candelight at Joslyn Park",
    day: "Wednesday",
    time: "8:30 PM",
    link: "https://zoom.us/j/726415314",
    phone: "(669) 900-9128",
    code: "726415314#",
    notes: "Participation"
  },
  {
    name: "Candlelight - Burbank Group",
    day: "Wednesday",
    time: "10:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Candlelight 1 hour.. unless stated"
  },
  {
    name: "Principles Before Pandemic - Late Night",
    day: "Wednesday",
    time: "10:00 PM",
    link: "https://zoom.us/j/230937550",
    phone: "(408) 638-0968",
    code: "230937550#",
    notes: "Reading from As Bill Sees It, 10 min Speaker + Participation"
  },
  {
    name: "Quarantine Solutions",
    day: "Wednesday",
    time: "10:00 PM",
    link: "https://zoom.us/j/273337177",
    phone: "(669) 900-6833",
    code: "273337177#",
    notes: "Daily Reflections, 15 min speaker + participation"
  },
  {
    name: "Wednesday Night Marina Center Late Night",
    day: "Wednesday",
    time: "11:00 PM",
    link: "https://zoom.us/j/295410657",
    phone: "(669) 900-6833",
    code: "295410657#",
    notes: "15-20 Minute Speaker + Participation / Open Meeting"
  },
  {
    name: "5:30 Valley Club As Bill Sees It",
    day: "Thursday",
    time: "5:30 AM",
    link: "https://zoom.us/j/664561304",
    phone: "",
    notes: "As Bill Sees It Topic + Participation"
  },
  {
    name: "The Early Show",
    day: "Thursday",
    time: "6:00 AM",
    link: "https://zoom.us/j/121338280?pwd=cU0vVDU4djV1ZU9kL0Z6SWpSNXdjUT09",
    phone: "",
    notes: "Open meeting M-F, daily reading and sharing from As Bill Sees It"
  },
  {
    name: "12 & 12 Book Study",
    day: "Thursday",
    time: "6:30 AM",
    link:
      "https://zoom.us/j/387014776?_ga=2.23329202.907325610.1584476548-1294044596.1563549392",
    phone: "",
    notes: "Group chapter reading; shares"
  },
  {
    name: "Big Book Study | Tropical (UPDATED)",
    day: "Thursday",
    time: "7:00 AM",
    link: "https://zoom.us/j/337023127",
    phone: "",
    notes: "Big Book Study & Participation"
  },
  {
    name: "Alano 12/12 715AM Meeting",
    day: "Thursday",
    time: "7:15 AM",
    link: "https://zoom.us/j/969112316",
    phone: "(669) 900-6833",
    code: "969112316#",
    notes:
      "Read 12 x 12; amended format each person reads a few paragraphs or a page."
  },
  {
    name: "Sobreity 101",
    day: "Thursday",
    time: "7:15 AM",
    link: "https://zoom.us/j/8998235722",
    phone: "",
    notes: "Open, speaker and discussion"
  },
  {
    name: "Unurban Santa Monica 12 and 12",
    day: "Thursday",
    time: "7:15 AM",
    link: "https://zoom.us/j/388163992",
    phone: "(669) 900-6833",
    code: "388163992#",
    notes: "Speaker/Participation"
  },
  {
    name: "Hollywood & Gardner - Big Book Study",
    day: "Thursday",
    time: "7:30 AM",
    link: "https://zoom.us/j/562311923",
    phone: "(669) 900-6833",
    code: "562311923#",
    notes: "Cover To Cover Big Book Study, LGBTQ+"
  },
  {
    name: "Log(in) Cabin Step and Tradition Thursdays",
    day: "Thursday",
    time: "7:30 AM",
    link: "https://zoom.us/j/776382580",
    phone: "(669) 900-6833",
    code: "776382580#",
    notes: "Step & Tradition Meeting, 20min Speaker, participation, 1 Hr."
  },
  {
    name: "Tropical Thursday",
    day: "Thursday",
    time: "8:30 AM",
    link: "https://zoom.us/j/388722570",
    phone: "(669) 900-6833",
    code: "388722570#",
    notes: "15 min speaker, participation"
  },
  {
    name: "Thur Women’s Double Winners Courage to Change",
    day: "Thursday",
    time: "9:30 AM",
    link: "https://zoom.us/j/605061780",
    phone: "(669) 900-6833",
    code: "605061780#",
    notes: "Women’s Double Winners AA/Alanon 1 hour read from Courage to Change"
  },
  {
    name: "AA Secular Meeting",
    day: "Thursday",
    time: "12:00 PM",
    link: "https://zoom.us/j/295712428",
    phone: "(669) 900-6833",
    code: "295712428#",
    notes: "Secular AA meeting"
  },
  {
    name: "Century City Lunch Bunch",
    day: "Thursday",
    time: "12:00 PM",
    link: "https://zoom.us/j/706016688",
    phone: "(669) 900-6833",
    code: "706016688#",
    notes: "15 minute speaker; participation"
  },
  {
    name: "Farmers Mkt Lunch Bunch Big Book",
    day: "Thursday",
    time: "12:00 PM",
    link: "https://zoom.us/3208662276",
    phone: "",
    notes: "Big Book Study"
  },
  {
    name: "Thursday WLA Men’s Stag Meeting (M)",
    day: "Thursday",
    time: "12:00 PM",
    link: "https://zoom.us/j/931031420",
    phone: "",
    notes: "Men’s Stag Speaker Meeting - Solution Oriented"
  },
  {
    name: "WARG Step Study",
    day: "Thursday",
    time: "12:00 PM",
    link: "https://zoom.us/j/5444707170",
    phone: "(669) 900-6833",
    code: "5444707170#",
    notes: "Step Study"
  },
  {
    name: "Came to Believe Women’s Meeting",
    day: "Thursday",
    time: "12:30 PM",
    link: "https://zoom.us/j/732585775?pwd=ODRTekJlYVZPRFM3QlNKSFJJbVlZQT09",
    phone: "(669) 900-6833",
    code: "732585775#\nPassword - 529481",
    notes: "Women’s meeting"
  },
  {
    name: "Pathfinders 12:30",
    day: "Thursday",
    time: "12:30 PM",
    link: "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
    phone: "(346) 248-7799",
    code: "941672314#",
    notes: "Open Discussion"
  },
  {
    name: "Camden Solutions in Sobriety",
    day: "Thursday",
    time: "1:00 PM",
    link: "https://zoom.us/j/2474183320",
    phone: "(669) 900-9128",
    code: "2474183320#",
    notes: "15 min Speaker + Participation"
  },
  {
    name: "Happy Joyous And Free",
    day: "Thursday",
    time: "3:00 PM",
    link: "https://zoom.us/j/5306564420",
    phone: "",
    notes: ""
  },
  {
    name: "On the Waterfront Beginners Joslyn Park",
    day: "Thursday",
    time: "5:45 PM",
    link: "https://zoom.us/j/857081317",
    phone: "(669) 900-9128",
    code: "857081317#",
    notes: "Beginner’s Meeting"
  },
  {
    name: "Arlington Beginners",
    day: "Thursday",
    time: "6:00 PM",
    link: "https://zoom.us/j/190553987",
    phone: "(301) 715-8592",
    code: "190553987#",
    notes: "Oldest active group in Los Angeles! 1 hr/1 speaker Tu/Thu 8pm"
  },
  {
    name: "Coexist Gay Meeting",
    day: "Thursday",
    time: "6:00 PM",
    link: "https://zoom.us/j/691017374",
    phone: "",
    notes: "LGBTQ+ , but all are welcome. 15min leader, participation."
  },
  {
    name: "Grapevine Meeting",
    day: "Thursday",
    time: "6:00 PM",
    link: "https://zoom.us/j/282018390",
    phone: "(669) 900-6833",
    code: "282018390#",
    notes: "AA Grapevine discussion"
  },
  {
    name: "Just for Today (W)",
    day: "Thursday",
    time: "6:00 PM",
    link: "https://zoom.us/j/362883521",
    phone: "(301) 715-8592",
    code: "362883521#",
    notes: "Women’s meeting, 24 hour a day meditation book, discussion"
  },
  {
    name: "Life After Ten Thursday",
    day: "Thursday",
    time: "6:00 PM",
    link: "https://cccconfer.zoom.us/j/186305261",
    phone: "(669) 900-6833,186305261#",
    notes: "Sharing is limited to those with over 10 years."
  },
  {
    name: 'Playa Vista "Last Resort"',
    day: "Thursday",
    time: "6:00 PM",
    link: "https://zoom.us/j/255200766",
    phone: "(301) 715-8592",
    code: "255200766#",
    notes: "Closed, Speaker + Involuntary Sharing"
  },
  {
    name: "Woodland Hills 12&12 Discussion",
    day: "Thursday",
    time: "6:00 PM",
    link: "https://zoom.us/j/7702664727",
    phone: "(166) 990-06833",
    code: "7702664727# Meeting code: 770 266 4727",
    notes: "Participation"
  },
  {
    name: "Happy Hour (Hollywood LGBT Center)",
    day: "Thursday",
    time: "6:15 PM",
    link: "https://zoom.us/j/8155607901",
    phone: "",
    notes: "LGBT+, 15 min speaker, participation"
  },
  {
    name: "EMO SOB",
    day: "Thursday",
    time: "6:30 PM",
    link: "https://zoom.us/j/866415552",
    phone: "(669) 900-9128",
    code: "866415552#",
    notes: "Observe a 20 min conversation on Emotional Sobriety."
  },
  {
    name: "There is a Solution Men’s Stag Meeting of AA",
    day: "Thursday",
    time: "6:30 PM",
    link: "https://zoom.us/j/140533882?pwd=ZDlveGFRWHZuOFpaS1JUS3BNN0Y4Zz09",
    phone: "(669) 900-6833",
    code: "140533882#\nPassword: 590149",
    notes: "15 minute speaker followed by sharing"
  },
  {
    name: "West Hollywood Housekeeping Recovery Meeting",
    day: "Thursday",
    time: "6:30 PM",
    link: "https://zoom.us/j/292490242",
    phone: "(669) 900-6833",
    code: "292490242#",
    notes:
      "Newbies, oldsters, co-ed, gay, straight, short, tall, light, dark, everybody!"
  },
  {
    name: "Into Action - Step Study",
    day: "Thursday",
    time: "6:30 PM",
    link: "https://zoom.us/j/6386954617",
    phone: "(669) 900-6833",
    code: "6386954617#",
    notes: "1-Hr AA Step Study, 20m speaker, Shares, Log Cabin"
  },
  {
    name: "There Is A Solution (M)",
    day: "Thursday",
    time: "7:00 PM",
    link: "https://zoom.us/j/727333563",
    phone: "(669) 900-6833",
    code: "727333563#",
    notes: "Closed Mens - 10 minute speaker/participation meeting"
  },
  {
    name: "Thursday PG & Chill Key Group",
    day: "Thursday",
    time: "7:00 PM",
    link: "https://zoom.us/j/802496652",
    phone: "(166) 990-06833",
    code: "802496652",
    notes: "Open AA Speaker Meeting + Participation"
  },
  {
    name: "Brentwood Workshop",
    day: "Thursday",
    time: "7:00 PM",
    link: "https://zoom.us/j/890643283",
    phone: "(166) 990-09128",
    code: "3105007139#",
    notes: "Beginners Workshop"
  },
  {
    name: "By The Book Step Study",
    day: "Thursday",
    time: "7:00 PM",
    link: "https://zoom.us/j/740799516",
    phone: "(166) 990-06833",
    code: "740799516#",
    notes: "Closed meeting, 75 min, Step reading, speaker & share"
  },
  {
    name: "Powerless #1",
    day: "Thursday",
    time: "7:00 PM",
    link: "https://zoom.us/j/172157389",
    phone: "(166) 990-09128",
    code: "172157389#",
    notes: "As Bill Sees It, 20 min speaker, participation"
  },
  {
    name: "Sunset Speaker Meeting",
    day: "Thursday",
    time: "7:00 PM",
    link: "https://zoom.us/j/144469443?pwd=S1R3bGhiOFVpNEhqcFF6YzZSTHRBQT09",
    phone: "(669) 900-6833",
    code: "144469443#",
    notes: "Speaker Meeting"
  },
  {
    name: "Thursday Night Pathfinders Big Book Study",
    day: "Thursday",
    time: "7:00 PM",
    link: "https://zoom.us/j/314441565",
    phone: "(669) 900-6833",
    code: "314441565#",
    notes: ""
  },
  {
    name: "(The Bunker) Dangerous Sports Club Men’s Meeting",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/402637198",
    phone: "1 669 900 6833",
    code: "402637198 Meeting code: 402 637 198",
    notes: "Men’s Meeting - Open Participation"
  },
  {
    name: "Big Book Study",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/453268620?pwd=MjZvYmtmbllaTjQ1Wk9hMzhVUStVZz09",
    phone: "(669) 900-6833",
    code: "453268620#\nPassword: 752901",
    notes: "Paragraph by paragraph Big Book Study"
  },
  {
    name: 'Bring Your Own Big Book "Moorpark"',
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/470479623",
    phone: "",
    notes: "Book Study"
  },
  {
    name: "Emotional Sobriety",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/9683634877",
    phone: "(669) 900-6833",
    code: "9683634877#",
    notes: "40 minute meeting"
  },
  {
    name: "Great Fact People’s Stag",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/833719806",
    phone: "(669) 900-9128",
    code: "833719806#",
    notes:
      "This is a closed meeting of AA; only those who have a desire to stop drinking may attend."
  },
  {
    name: "Host Of Friends",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/6234511488",
    phone: "(669) 900-9128",
    code: "6234511488#",
    notes: "Speaker, participation"
  },
  {
    name: "How Now",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/860869724",
    phone: "",
    notes: "Speaker Participation- Las Encinas Hospital"
  },
  {
    name: "Just The Black Print",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/310402300",
    phone: "(669) 900-6833",
    code: "310402300#",
    notes: "Big Book Study"
  },
  {
    name: "La Cienega Thursday 7:30 pm",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/6100931123",
    phone: "(669) 900-6833",
    code: "6100931123#",
    notes: "20 min speaker, participation Meeting"
  },
  {
    name: "Liberty Group of Alcoholics Anonymous",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/2271468925",
    phone: "",
    notes: "Speaker Meeting Focusing on Solutions, Followed by Sharing"
  },
  {
    name: "Primary Purpose",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/695835381",
    phone: "",
    notes: "Big Book Study"
  },
  {
    name: "Principles Before Personalities",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/576360427",
    phone: "(669) 900-6833",
    code: "576360427#",
    notes: "Big Book study & Participation"
  },
  {
    name: "Solutions",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/363065881",
    phone: "",
    notes: "Men’s Stag, 15-min speaker on the inventory process"
  },
  {
    name: "Steps To Life - Step Study",
    day: "Thursday",
    time: "7:30 PM",
    link: "https://zoom.us/j/875860427?pwd=bGpNMmlBdWQzRm0rQ1JrYWZ0QmZLZz09",
    phone: "(669) 900-6833",
    code: "875860427#\nPassword: 511909",
    notes: "Thursday night 12&12 Step Study. 15 min speaker + participation."
  },
  {
    name: "Newcomers - Burbank Group",
    day: "Thursday",
    time: "8:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "open newcomers meeting 1 hour unless stated"
  },
  {
    name: "Ohio St Thursday",
    day: "Thursday",
    time: "8:00 PM",
    link: "https://zoom.us/j/382005101",
    phone: "(669) 900-9128",
    code: "382-005-101#",
    notes: "Speaker/Participation"
  },
  {
    name: "Powerless #1",
    day: "Thursday",
    time: "8:00 PM",
    link: "https://zoom.us/j/172157389",
    phone: "(669) 900-9128",
    code: "172157389#",
    notes: "As Bill Sees It, 20min speaker, participation"
  },
  {
    name: "Powerless #1",
    day: "Thursday",
    time: "8:00 PM",
    link: "https://zoom.us/j/172157389",
    phone: "(166) 990-09128",
    code: "172157389#",
    notes: "As Bill Sees It, 20 min speaker, participation"
  },
  {
    name: "Women’s Candlelight (W)",
    day: "Thursday",
    time: "8:00 PM",
    link: "https://zoom.us/j/221547134",
    phone: "",
    notes: "Women’s Meeting"
  },
  {
    name: "Namaste Sober",
    day: "Thursday",
    time: "8:15 PM",
    link: "https://zoom.us/j/834288230",
    phone: "",
    notes: "11th Step Yoga and Mediation Meeting. 1 hour and 15 minutes."
  },
  {
    name: "Thursday Alvarado - Echo Park AA",
    day: "Thursday",
    time: "8:30 PM",
    link: "https://zoom.us/j/5564206969",
    phone: "(669) 900-6833",
    code: "5564206969",
    notes: "15 minute speaker + participation"
  },
  {
    name: "Chapter 12 Coed discussion",
    day: "Thursday",
    time: "9:00 PM",
    link: "https://zoom.us/j/148440946",
    phone: "(669) 900-6833",
    code: "148440946#",
    notes: "10 Minute lead and discussion"
  },
  {
    name: "Sunlight of the World Spirit - Speaker/Participation",
    day: "Thursday",
    time: "9:00 PM",
    link: "https://zoom.us/j/951810083",
    phone: "(669) 900-6833",
    code: "951810083#",
    notes:
      "Closed Meeting of Alcoholics Anonymous for those who identify as an alcoholic or have the desire to stop drinking."
  },
  {
    name: "Principles Before Pandemic - Late Night",
    day: "Thursday",
    time: "10:00 PM",
    link: "https://zoom.us/j/230937550",
    phone: "(408) 638-0968",
    code: "230937550#",
    notes: "Reading from As Bill Sees It, 10 min Speaker + Participation"
  },
  {
    name: "WANGL (We Are Not A Glum Lot)",
    day: "Thursday",
    time: "10:00 PM",
    link: "https://zoom.us/j/998455885",
    phone: "(669) 900-6833",
    code: "998455885#",
    notes:
      "Late night open meeting that starts rowdy with some call and response and then settles in to focus on sobriety."
  },
  {
    name: "5:30am Valley Club Daily Reflections",
    day: "Friday",
    time: "5:30 AM",
    link: "https://zoom.us/j/664561304",
    phone: "",
    notes: "Daily Reflections Topic + Participation"
  },
  {
    name: "The Early Show",
    day: "Friday",
    time: "6:00 AM",
    link: "https://zoom.us/j/121338280?pwd=cU0vVDU4djV1ZU9kL0Z6SWpSNXdjUT09",
    phone: "",
    notes: "Open meeting M-F, daily reading and sharing from As Bill Sees It"
  },
  {
    name: "7am Shivering Denizens Tropical Cafe",
    day: "Friday",
    time: "7:00 AM",
    link: "https://zoom.us/j/8626362214",
    phone: "(669) 900-6833",
    code: "8626362214#",
    notes: "speaker meeting"
  },
  {
    name: "Alano Club Grapevine 715AM",
    day: "Friday",
    time: "7:15 AM",
    link: "https://zoom.us/j/693053917",
    phone: "(669) 900-6833",
    code: "693053917#",
    notes: "Grapevine; Speaker Participation"
  },
  {
    name: "Unurban Santa Monica Grapevine",
    day: "Friday",
    time: "7:15 AM",
    link: "https://zoom.us/j/388163992",
    phone: "(669) 900-6833",
    code: "388163992#",
    notes: "Speaker/Participation"
  },
  {
    name: "Thank God I’m Sober Hollywood & Gardner",
    day: "Friday",
    time: "7:30 AM",
    link: "https://zoom.us/j/271617503",
    phone: "",
    notes: "Speaker & Participation"
  },
  {
    name: "Thank God It’s Friday",
    day: "Friday",
    time: "7:30 AM",
    link: "https://zoom.us/j/123834055",
    phone: "",
    notes: "20min speaker, participation"
  },
  {
    name: "John Barleycorn Must Die",
    day: "Friday",
    time: "8:30 AM",
    link: "https://zoom.us/j/398032429",
    phone: "(669) 900-6833",
    code: "398032429#",
    notes: "Speaker, Meditation meeting"
  },
  {
    name: "As Bill Sees It",
    day: "Friday",
    time: "9:00 AM",
    link: "https://zoom.us/j/841542867",
    phone: "(669) 900-6833",
    code: "841542867#",
    notes: "As Bill Sees It, Speaker, Participation"
  },
  {
    name: "Tribeca East West",
    day: "Friday",
    time: "10:00 AM",
    link: "https://zoom.us/j/351932194",
    phone: "(669) 900-9128",
    code: "561373578#",
    notes: "New Yorkers in LA and NYC"
  },
  {
    name: "A Good Way To Start",
    day: "Friday",
    time: "12:00 PM",
    link: "https://zoom.us/j/9426418283",
    phone: "(669) 900-6833",
    code: "9426418283#",
    notes: "1 hr. 10 min speaker, sharing."
  },
  {
    name: "A Good Way To Start (Eagle Rock)",
    day: "Friday",
    time: "12:00 PM",
    link: "https://zoom.us/j/9426418283",
    phone: "",
    notes: "1hr Speaker/Participation / Meeting code: 942 641 8283"
  },
  {
    name: "Friday Daily Grill Noon Men’s Stag Meeting",
    day: "Friday",
    time: "12:00 PM",
    link: "https://zoom.us/j/934073472",
    phone: "",
    notes: "Men’s Stag, Speaker, Participation"
  },
  {
    name: "Friday WLA Men’s Stag Meeting",
    day: "Friday",
    time: "12:00 PM",
    link: "https://zoom.us/j/931031420",
    phone: "",
    notes: "Men’s Stag Speaker Meeting - Solution Oriented"
  },
  {
    name: "Hole In The Sky - Big Book Study",
    day: "Friday",
    time: "12:00 PM",
    link: "https://zoom.us/j/295712428",
    phone: "(669) 900-6833",
    code: "295712428#",
    notes: "Big Book Study/Participation"
  },
  {
    name: "Moorpark Good Day Noon Big Book Study",
    day: "Friday",
    time: "12:00 PM",
    link: "https://zoom.us/j/365967968",
    phone: "(166) 990-06833",
    code: "365967968# Meeting code: 365967968",
    notes: "Book Study"
  },
  {
    name: "WARG Participation Meeting",
    day: "Friday",
    time: "12:00 PM",
    link: "https://zoom.us/j/5444707170",
    phone: "(669) 900-6833",
    code: "5444707170#",
    notes: "15 minute speaker / participation meeting"
  },
  {
    name: "Pathfinders 12:30",
    day: "Friday",
    time: "12:30 PM",
    link: "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
    phone: "(346) 248-7799",
    code: "941672314#",
    notes: "Open Discussion"
  },
  {
    name: "Sober Solutions Women’s Meeting",
    day: "Friday",
    time: "12:30 PM",
    link: "https://zoom.us/j/410337602",
    phone: "(669) 900-9128",
    code: "410337602#\nPassword 086443",
    notes: "Women’s Meeting, 15 min. speaker & participation"
  },
  {
    name: "The Green Room",
    day: "Friday",
    time: "12:30 PM",
    link: "https://zoom.us/j/3208662276",
    phone: "",
    notes: "speaker/participation"
  },
  {
    name: "Friday Camden BH",
    day: "Friday",
    time: "1:00 PM",
    link: "https://zoom.us/j/2474183320",
    phone: "",
    notes: "Mixed women/men. 15 minute speaker + Participation"
  },
  {
    name: "Off The Wall",
    day: "Friday",
    time: "1:00 PM",
    link: "https://zoom.us/j/769496947",
    phone: "",
    notes: "15 min speaker/discussion"
  },
  {
    name: 'St. Philips "Noon" Meeting - Pasadena',
    day: "Friday",
    time: "1:00 PM",
    link: "https://zoom.us/j/378503606",
    phone: "(669) 900-9128",
    code: "378503606#",
    notes:
      "Closed Meeting; reoccurring through April 19 or until health restrictions are lifted"
  },
  {
    name: "Mid Afternoon Madness",
    day: "Friday",
    time: "3:00 PM",
    link: "https://zoom.us/j/240743991",
    phone: "(669) 900-6833",
    code: "240743991#",
    notes:
      "One hour meeting with a 10 minute speaker and participation from coast to coast. All are welcome."
  },
  {
    name: "Relapse Prevention",
    day: "Friday",
    time: "5:30 PM",
    link: "https://zoom.us/j/7278141014",
    phone: "(669) 900-9128",
    code: "7278141014#",
    notes: "12&12 Step Study"
  },
  {
    name: "Emotional Sobriety- Burbank Group",
    day: "Friday",
    time: "6:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Open meeting"
  },
  {
    name: "Friday Life After 10",
    day: "Friday",
    time: "6:00 PM",
    link: "https://zoom.us/j/979003066",
    phone: "(346) 248-7799",
    code: "979003066#",
    notes:
      "Leader 10min share, then participation 10+ to share, time for burning desire under 10yrs"
  },
  {
    name: "Hole In The Sky - Daily Reflections Meeting",
    day: "Friday",
    time: "6:00 PM",
    link: "https://zoom.us/j/137609502",
    phone: "(669) 900-6833",
    code: "137609502#",
    notes: "Daily Reflections/Participation"
  },
  {
    name: "Happy Hour (Hollywood LGBT Center)",
    day: "Friday",
    time: "6:10 PM",
    link: "https://zoom.us/j/743349250",
    phone: "",
    notes: "LGBT+, 15 min speaker, participation"
  },
  {
    name: "Friday Night AA Meeting",
    day: "Friday",
    time: "6:30 PM",
    link: "https://zoom.us/j/295249945?pwd=bTZIZHV6TEtYVDhaNkJXQitlalI2QT09",
    phone: "",
    notes: "1 hour participation meeting, 10- 15 minute main share with a topic"
  },
  {
    name: "Grant Park BBQ & Book Study",
    day: "Friday",
    time: "6:30 PM",
    link: "https://us04web.zoom.us/j/2401839325",
    phone: "(669) 900-6833",
    code: "2401839325#",
    notes:
      "Big Book Discussion. Read as much or as little as you like. Raise your hand in chat to participate or to share on the text."
  },
  {
    name: "Holyywood Young People’s Literature Study",
    day: "Friday",
    time: "6:30 PM",
    link: "https://zoom.us/j/300109506",
    phone: "",
    notes: "1 hour Young Peoples Book Study"
  },
  {
    name: "Friday Night PG & Chill",
    day: "Friday",
    time: "7:00 PM",
    link: "https://zoom.us/j/802496652",
    phone: "(166) 990-06833",
    code: "802496652",
    notes: "Open AA Speaker + Particpation"
  },
  {
    name: "Ladies Friday Night Out (W)",
    day: "Friday",
    time: "7:00 PM",
    link: "https://zoom.us/j/143891343",
    phone: "(669) 900-6833",
    code: "143891343#",
    notes: "Women’s Meeting. 15min speaker + Participation"
  },
  {
    name: "Balancing Act",
    day: "Friday",
    time: "7:00 PM",
    link: "https://zoom.us/j/914562034",
    phone: "",
    notes: "15min speaker"
  },
  {
    name: "Beginners Workshop Meeting",
    day: "Friday",
    time: "7:00 PM",
    link: "https://zoom.us/j/722501758",
    phone: "(301) 715-8592",
    code: "722501758#",
    notes: ""
  },
  {
    name: "Best of Old Time AA",
    day: "Friday",
    time: "7:00 PM",
    link: "https://zoom.us/j/8021543359",
    phone: "(669) 900-6833",
    code: "3414167606#\nParticipant code: 47",
    notes: "Speaker & Q&A"
  },
  {
    name: "Friday Night Beginner’s Meeting",
    day: "Friday",
    time: "7:00 PM",
    link: "https://zoom.us/j/139736550",
    phone: "",
    notes: "Speaker meeting (45 min speaker)"
  },
  {
    name: "Friday Night Camden online Beverly Hills",
    day: "Friday",
    time: "7:00 PM",
    link: "https://zoom.us/j/971435140",
    phone: "(669) 900-6833",
    code: "971435140#",
    notes: "10-15 min speaker/group participation"
  },
  {
    name: "Magnolia Park Steps & Traditions Meeting",
    day: "Friday",
    time: "7:00 PM",
    link: "https://zoom.us/j/659191310",
    phone: "(669) 900-6833",
    code: "282309192#",
    notes: "M/F - 15 min Speaker, Participation 12&12 reading & sharing"
  },
  {
    name: "Take off your shoes Friday meditation",
    day: "Friday",
    time: "7:00 PM",
    link: "https://zoom.us/j/174437715",
    phone: "",
    notes: "10 min meditation speaker share."
  },
  {
    name: "Elm Street - Venice",
    day: "Friday",
    time: "7:30 PM",
    link: "https://zoom.us/j/879291378",
    phone: "(669) 900-9128",
    code: "879291378#",
    notes: "5 minute mediation, 30 minute speaker, voluntary sharing,"
  },
  {
    name: "Friday Night Newcomers",
    day: "Friday",
    time: "7:30 PM",
    link: "https://zoom.us/j/7041698066",
    phone: "",
    notes: "10 min speaker, participation"
  },
  {
    name: "Fun With Problems Speaker Meeting",
    day: "Friday",
    time: "7:30 PM",
    link: "https://zoom.us/j/804626562",
    phone: "(669) 900-9128",
    code: "804626562#",
    notes: "20min Speaker Meeting w/ Participation"
  },
  {
    name: 'Beverly Glen "Dickens" Speaker Meeting!',
    day: "Friday",
    time: "8:00 PM",
    link: "https://zoom.us/j/614813270",
    phone: "(669) 900-6833",
    code: "614813270#",
    notes: "45 Min Speaker Meeting"
  },
  {
    name: "Bridge Back To Recovery - Topic Discussion",
    day: "Friday",
    time: "8:00 PM",
    link: "https://zoom.us/j/425640373?pwd=bEhOaSsyd2oyK1h3d0FZc2NPcmk3UT09",
    phone: "(669) 900-6833",
    code: "425640373#\nPassword: 790309",
    notes: "Quaker Style Format"
  },
  {
    name: "Brunswick Patio AA Speaker",
    day: "Friday",
    time: "8:00 PM",
    link: "https://zoom.us/j/5187632014?pwd=U0U4RjE0d0ZHQXc3a25mY1dWbnk3UT09",
    phone: "",
    notes: "Speaker meeting"
  },
  {
    name: "Friday Night Online AA",
    day: "Friday",
    time: "8:00 PM",
    link: "https://zoom.us/j/449681043",
    phone: "",
    notes: "participation"
  },
  {
    name: "Friday Night SOS Meeting (Plummer Park)",
    day: "Friday",
    time: "8:00 PM",
    link: "https://valassisdigital.zoom.us/j/865684852",
    phone: "",
    notes: "1 hour meeting, 20 min speaker, participation."
  },
  {
    name: "Friday Night We Agnostics (On Zoom)",
    day: "Friday",
    time: "8:00 PM",
    link: "https://zoom.us/j/4949169875",
    phone: "(669) 900-6833",
    code: "4949169875#",
    notes: "Secular/Agnostics, Speaker, Participation, 1 hr."
  },
  {
    name: "Living Sober",
    day: "Friday",
    time: "8:00 PM",
    link: "https://zoom.us/j/419115363?pwd=Nm82YTQ4WUxBS0pQNUNWVkR4bFF3Zz09",
    phone: "(301) 715-8592",
    code: "419115363# Password: 823473",
    notes: "Primarily LGBT+. Speaker + participation meeting."
  },
  {
    name: "Lottery - Burbank Group",
    day: "Friday",
    time: "8:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Come check us out.."
  },
  {
    name: "New Hope On New Hampshire",
    day: "Friday",
    time: "8:00 PM",
    link: "https://zoom.us/j/374184172?pwd=QkwraFk2VWN0ZWQvNVRmTWIwK21UQT09",
    phone: "(669) 900-6833",
    code: "374184172#\nPassword: 091879",
    notes: "1 hr speaker meeting starts at 8pm. Chat room is opened at 7:30pm"
  },
  {
    name: "Primary Purpose",
    day: "Friday",
    time: "8:00 PM",
    link: "https://zoom.us/j/5588838366",
    phone: "",
    notes: "Big Book Study/Speaker/Participation"
  },
  {
    name: "TGIF",
    day: "Friday",
    time: "8:00 PM",
    link: "https://zoom.us/j/951340960",
    phone: "(346) 248-7799",
    code: " 951 340 960",
    notes: "Open Meeting, 30 min speaker, participation"
  },
  {
    name: "Living Well and Sober (San Gabriel)",
    day: "Friday",
    time: "8:15 PM",
    link: "https://AA24x7.com",
    phone: "(669) 900-6833",
    code: "5042974103#",
    notes:
      "Speaker: Maybe Temp Participation + AA24x7.com can help any meeting get online without the tech obstacles"
  },
  {
    name: "Fridays Into Action Hwd & Gardner Candlelight",
    day: "Friday",
    time: "8:30 PM",
    link: "https://zoom.us/j/340943612",
    phone: "(669) 900-9128",
    code: "340943612#",
    notes: "Candlelight, participation"
  },
  {
    name: "The Gong Show",
    day: "Friday",
    time: "8:30 PM",
    link: "https://livenation.zoom.us/j/8392106533",
    phone: "(669) 900-6833,8392106533#",
    notes: "Speaker participation meeting"
  },
  {
    name: "Sunlight of the World Spirit - Speaker/Participation",
    day: "Friday",
    time: "9:00 PM",
    link: "https://zoom.us/j/951810083",
    phone: "(669) 900-6833",
    code: "951810083#",
    notes:
      "Closed Meeting of Alcoholics Anonymous for those who identify as an alcoholic or have the desire to stop drinking."
  },
  {
    name: "Candlelight - Burbank Group",
    day: "Friday",
    time: "10:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Candlelight meeting for those who need one"
  },
  {
    name: "Principles Before Pandemic - Late Night",
    day: "Friday",
    time: "10:00 PM",
    link: "https://zoom.us/j/230937550",
    phone: "(408) 638-0968",
    code: "230937550#",
    notes: "Reading from As Bill Sees It, 10 Min Speaker + Participation"
  },
  {
    name: "Friday Night Marina Center Late Night",
    day: "Friday",
    time: "11:00 PM",
    link: "https://zoom.us/j/718944136",
    phone: "(408) 638-0968",
    code: "718944136#",
    notes: "15-20 Minute Speaker + Participation / Open Meeting"
  },
  {
    name: "5:30am Valley Club AA Literature & Participation",
    day: "Saturday",
    time: "5:30 AM",
    link: "https://zoom.us/j/664561304",
    phone: "",
    notes: "AA Literature + Participation"
  },
  {
    name: "Attitude Adjustment (Hermosa/SBAC)",
    day: "Saturday",
    time: "7:00 AM",
    link: "https://zoom.us/j/255900683",
    phone: "",
    notes: "Open, Mixed, Participation, 1Hr"
  },
  {
    name: "Beginners & Winners 7am Sat Cafe Tropical",
    day: "Saturday",
    time: "7:00 AM",
    link: "https://zoom.us/j/2278717319",
    phone: "",
    notes: "15 - 20 min speaker, sharing"
  },
  {
    name: "Doing the Deal - MEN’S STAG",
    day: "Saturday",
    time: "7:00 AM",
    link: "https://zoom.us/j/6254596555",
    phone: "",
    notes: "Participation with 2 Minute Timer"
  },
  {
    name: "Valley Club 7am Big Show",
    day: "Saturday",
    time: "7:00 AM",
    link: "https://zoom.us/j/160558337",
    phone: "",
    notes: "Leader & Participation"
  },
  {
    name: "Gladstones Solutions by the Sea",
    day: "Saturday",
    time: "7:20 AM",
    link: "https://zoom.us/j/841250180",
    phone: "(669) 900-6833",
    code: "841250180#",
    notes: "Speaker Meeting"
  },
  {
    name: "Attitude Adjustment (South Pasadena)",
    day: "Saturday",
    time: "7:30 AM",
    link: "https://zoom.us/j/177749180?pwd=UmZOdStxY2Jyamh1VFBYQjBreWZudz09.",
    phone: "(720) 707-2699",
    code: "177749180#\nPassword: 974641#",
    notes: "Saturday & Sunday, Daily Readings, Participation"
  },
  {
    name: "Hi & Dry 8000 Sunset",
    day: "Saturday",
    time: "8:00 AM",
    link: "https://zoom.us/j/110152140",
    phone: "(669) 900-6833",
    code: "110152140#",
    notes: "Mixed, Speaker + Participation"
  },
  {
    name: "Hole In The Sky - Spiritual Discussion",
    day: "Saturday",
    time: "8:00 AM",
    link: "https://zoom.us/j/240808936",
    phone: "(669) 900-6833",
    code: "240808936#",
    notes: "Discussion/Participation"
  },
  {
    name: "Sunrise Step Study",
    day: "Saturday",
    time: "8:15 AM",
    link: "https://zoom.us/j/347486176?pwd=Z2Nqd0ZKaXFBVEU2ZS9JTndocStvUT09",
    phone: "(669) 900-6833",
    code: "347486176#",
    notes: "Step Study"
  },
  {
    name: "Laurel Canyon Grapevine (Molly Malone’s)",
    day: "Saturday",
    time: "8:30 AM",
    link: "https://zoom.us/j/289676399",
    phone: "",
    notes:
      "Grapevine reading, short speaker, round robin (ends after everyone shares)"
  },
  {
    name: "No Whiners - Highland Park Womens (W)",
    day: "Saturday",
    time: "8:30 AM",
    link: "https://zoom.us/j/104216210",
    phone: "(669) 900-6833",
    code: "104216210#",
    notes:
      "Open Women’s Meeting. Shares called by lottery number. Email to join phone list: nowhinersaa@gmail.com"
  },
  {
    name: "North Hollywood Group of AA",
    day: "Saturday",
    time: "8:30 AM",
    link: "https://zoom.us/j/214504040",
    phone: "(669) 900-6833",
    code: "214504040#",
    notes: "Speaker, participation"
  },
  {
    name: "New Brunswick Morning Participation",
    day: "Saturday",
    time: "9:00 AM",
    link: "https://zoom.us/j/8731605989",
    phone: "",
    notes: "Closed / Mixed / 15min Speaker & Participation"
  },
  {
    name: "Ohio Saturday Solutions",
    day: "Saturday",
    time: "9:00 AM",
    link: "https://zoom.us/j/9313763436",
    phone: "(669) 900-9128",
    code: "9313763436#",
    notes: "Ohio Speaker Meeting with Solutions"
  },
  {
    name: "Original What It’s Like Now (M)",
    day: "Saturday",
    time: "9:00 AM",
    link: "https://zoom.us/j/6990482205",
    phone: "(669) 900-9128",
    code: "6990482205#",
    notes:
      "Men’s meeting; step and tradition study; 20-minute speaker followed by participation; 1 hour"
  },
  {
    name: "Spiritual Participation - Burbank Group",
    day: "Saturday",
    time: "9:00 AM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Spiritual side of sobriety"
  },
  {
    name: "Survivors",
    day: "Saturday",
    time: "9:00 AM",
    link: "https://zoom.us/j/813600823",
    phone: "",
    notes:
      "West Hollywood Recovery Center’s 9am Saturday morning Speaker / Participation meeting"
  },
  {
    name: "Unknown / No Name",
    day: "Saturday",
    time: "9:00 AM",
    link: "https://zoom.us/j/602639460",
    phone: "",
    notes: ""
  },
  {
    name: "Saturday Morning Women’s Meeting (Burbank)",
    day: "Saturday",
    time: "9:30 AM",
    link: "https://zoom.us/j/3804815257",
    phone: "",
    notes: "Burbank, hour and a half"
  },
  {
    name: "Windsor Club Men’s Stag (Rule 62)",
    day: "Saturday",
    time: "9:30 AM",
    link: "https://zoom.us/j/9604824615",
    phone: "(253) 215-8782",
    code: "9604824615#",
    notes: "Glendale speaker & participation Closed meeting"
  },
  {
    name: "Sanity On Saturday",
    day: "Saturday",
    time: "9:30 AM",
    link: "https://zoom.us/j/727888563",
    phone: "",
    notes: "Speaker/Participation"
  },
  {
    name: "Bagels and Lox - Normally held at Pico Alano Club (M)",
    day: "Saturday",
    time: "10:00 AM",
    link: "https://zoom.us/j/953336754",
    phone: "",
    notes: "Men’s stag, speaker, participation"
  },
  {
    name: "Book Study Sat 10am Prospect & Rodney",
    day: "Saturday",
    time: "10:00 AM",
    link: "https://zoom.us/j/5280644214",
    phone: "(669) 900-9128",
    code: "5280644214#",
    notes: "1 hour book study meeting with round robin sharing"
  },
  {
    name: "Chandler Sat Step Study",
    day: "Saturday",
    time: "10:00 AM",
    link: "https://zoom.us/j/7148334377",
    phone: "(669) 900-9128",
    code: "7148334377#",
    notes: "1 1/2 hour speaker participation step study meeting"
  },
  {
    name: "DIVA (Women’s Meeting)",
    day: "Saturday",
    time: "10:00 AM",
    link: "https://zoom.us/j/765849881",
    phone: "(669) 900-6833",
    code: "765849881#",
    notes:
      "Women’s Meeting. 10 minute speaker. Raised hand sharing. Time set aside for newcomers to share & burning desires"
  },
  {
    name: "Bread & Roses Men’s Stag (M)",
    day: "Saturday",
    time: "10:30 AM",
    link: "https://zoom.us/j/410736840",
    phone: "(669) 900-6833",
    code: "410736840#",
    notes: "Men’s Meeting"
  },
  {
    name: "Grant Park Pasadena",
    day: "Saturday",
    time: "11:00 AM",
    link: "https://zoom.us/j/587318378",
    phone: "(669) 900-6833",
    code: "587318378#",
    notes: "Leader/discussion"
  },
  {
    name: "North Hollywood Saturday Morning Gratitude Meeting",
    day: "Saturday",
    time: "11:00 AM",
    link: "https://zoom.us/j/462205062",
    phone: "(669) 900-6833",
    code: "462205062#",
    notes: "15 min. Speaker & Participation Open meeting"
  },
  {
    name: "Saturday Morning - Dunsmore Group",
    day: "Saturday",
    time: "11:00 AM",
    link: "https://zoom.us/j/590137296",
    phone: "(669) 900-6833",
    code: "590137296#",
    notes: "1 Hour meeting from the Verdugo Hills Alano Club"
  },
  {
    name: "Drunkalogueshow",
    day: "Saturday",
    time: "11:30 AM",
    link: "https://join.freeconferencecall.com/drunkalogueshow",
    phone: "(425) 585-6543 (Direct phone)",
    notes: "Speaker/Participation"
  },
  {
    name: "Started from a Bottom",
    day: "Saturday",
    time: "11:30 AM",
    link: "https://zoom.us/j/694720115",
    phone: "(669) 900-6833",
    code: "694720115#",
    notes: "20 minute speaker + participation"
  },
  {
    name: "Started from a Bottom",
    day: "Saturday",
    time: "11:30 AM",
    link: "https://zoom.us/j/268881530",
    phone: "(669) 900-6833",
    code: "268881530#",
    notes: "20 minute speaker participation"
  },
  {
    name: "Hole In The Sky - 12&12 Book Study",
    day: "Saturday",
    time: "12:00 PM",
    link: "https://zoom.us/j/295712428",
    phone: "(669) 900-6833",
    code: "295712428#",
    notes: "12&12 book study"
  },
  {
    name: "SAT NOON men’s stag - Burbank Group",
    day: "Saturday",
    time: "12:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Men’s stag"
  },
  {
    name: "Saturday Men’s Stag Speaker Meeting",
    day: "Saturday",
    time: "12:00 PM",
    link: "https://zoom.us/j/931031420",
    phone: "",
    notes: "Men’s Stag Speaker Meeting - Solution Oriented"
  },
  {
    name: "WARG Participation Meeting",
    day: "Saturday",
    time: "12:00 PM",
    link: "https://zoom.us/j/5444707170",
    phone: "(669) 900-6833",
    code: "5444707170#",
    notes: "Participation Meeting"
  },
  {
    name: "Pathfinders 12:30",
    day: "Saturday",
    time: "12:30 PM",
    link: "https://zoom.us/j/941672314?pwd=TlcxcFB4c1pHLzViSExjOU02ZGlHQT09",
    phone: "(346) 248-7799",
    code: "941672314#",
    notes: "Closed As Bill Sees It"
  },
  {
    name: "Epiphany",
    day: "Saturday",
    time: "12:30 PM",
    link: "https://zoom.us/j/261233823?pwd=Y3Nuc1NwMTRzZVdzdElVQUwvd2ppZz09",
    phone: "",
    notes: "15 minute speaker with participation"
  },
  {
    name: "Fellowship of the Spirit",
    day: "Saturday",
    time: "5:00 PM",
    link: "https://zoom.us/j/105638753?pwd=a0RKWEltYWZPLzFObTRoZ1JFRVRJdz09",
    phone: "(669) 900-6833",
    code: "105638753#\nPassword: 733805",
    notes: "Open Speaker/Participation (1 Hour)"
  },
  {
    name: "You Are Not Alone",
    day: "Saturday",
    time: "5:30 PM",
    link: "https://zoom.us/j/7278141014",
    phone: "(669) 900-9128",
    code: "7278141014#",
    notes: "Speaker and share"
  },
  {
    name: "Jammin’ in Hollywood",
    day: "Saturday",
    time: "6:00 PM",
    link: "https://zoom.us/j/915910195",
    phone: "(253) 215-8782",
    code: "915910195#",
    notes: "Open, Speaker, Participation"
  },
  {
    name: "Life After Ten",
    day: "Saturday",
    time: "6:00 PM",
    link: "https://zoom.us/j/908630651",
    phone: "(669) 900-9128",
    code: "908630651#",
    notes: "Speaker Participation"
  },
  {
    name: "Mixed Bag",
    day: "Saturday",
    time: "6:00 PM",
    link: "https://zoom.us/j/930800984",
    phone: "(669) 900-9128",
    code: "930800984#",
    notes: "Speaker, participation, open meeting"
  },
  {
    name: "Sat 6pm Step Study (Normally @ 14th & Olympic)",
    day: "Saturday",
    time: "6:00 PM",
    link: "https://zoom.us/j/586195377",
    phone: "",
    notes: "1 hour step study speaker & participation"
  },
  {
    name: "Sobriety First",
    day: "Saturday",
    time: "6:00 PM",
    link: "https://zoom.us/j/3146420781",
    phone: "",
    notes: "Speaker/Participation"
  },
  {
    name: "Topic Discussion - Burbank Group",
    day: "Saturday",
    time: "6:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "AA topic"
  },
  {
    name: "Joslyn Park Beginners",
    day: "Saturday",
    time: "6:15 PM",
    link: "https://zoom.us/j/151958754",
    phone: "(669) 900-6833",
    code: "151958754#",
    notes: "Beginner’s Meeting"
  },
  {
    name: "Saturday Night Camden",
    day: "Saturday",
    time: "6:30 PM",
    link: "https://zoom.us/j/883082249",
    phone: "(669) 900-6833",
    code: "883082249#",
    notes: ""
  },
  {
    name: "Unknown / No Name",
    day: "Saturday",
    time: "6:30 PM",
    link: "https://zoom.us/j/2445479025",
    phone: "",
    notes: ""
  },
  {
    name: "We Are Not Alone LGBT",
    day: "Saturday",
    time: "6:30 PM",
    link: "https://zoom.us/j/567976426",
    phone: "",
    notes: "Open LGBT Speaker/participation"
  },
  {
    name: "Saturday Night Way Of Life",
    day: "Saturday",
    time: "7:00 PM",
    link: "https://zoom.us/j/802496652",
    phone: "(669) 900-6833",
    code: "802496652#",
    notes: "Participation + Speaker"
  },
  {
    name: "Solutions in Sobriety",
    day: "Saturday",
    time: "7:00 PM",
    link: "http://zoom.us/j/863255768",
    phone: "Meeting ID 863255768 Password 854339",
    notes: "Meeting ID 863255768 Password 854339"
  },
  {
    name: "Hope On The Hill",
    day: "Saturday",
    time: "7:30 PM",
    link: "https://zoom.us/j/9375866854",
    phone: "",
    notes: "Open. Speaker."
  },
  {
    name: "Marina Center Participation Meeting",
    day: "Saturday",
    time: "7:30 PM",
    link: "https://zoom.us/j/192911151",
    phone: "(669) 900-6833",
    code: "192911151#",
    notes: "Speaker, Participation"
  },
  {
    name: "Nite Lite (The Purple room)",
    day: "Saturday",
    time: "7:30 PM",
    link: "https://zoom.us/j/629100763?pwd=M2NqbGVYU0lUWEVnUGlCbXRMN3R4Zz09",
    phone: "(669) 900-6833",
    code: "629100763#\nPassword: 494307",
    notes: "Participation"
  },
  {
    name: "No Matter What (Café Tropical)",
    day: "Saturday",
    time: "7:30 PM",
    link: "https://zoom.us/j/8487681638",
    phone: "(408) 638-0968",
    code: "8487681638#",
    notes: "20 minute speaker + Participation."
  },
  {
    name: "Sanctuary Meeting-Manhattan Beach",
    day: "Saturday",
    time: "7:30 PM",
    link: "https://zoom.us/j/637457163",
    phone: "",
    notes: "One hour mtg- 30 min Speaker w/ 20 min participation."
  },
  {
    name: "Coffeehouse Meeting",
    day: "Saturday",
    time: "8:00 PM",
    link: "https://zoom.us/j/523488118?pwd=bldLSFU4RDZoZ0FoaEFuWHk5WFFpUT09",
    phone: "",
    notes: "Acoustic music meeting with speaker and songs"
  },
  {
    name: "Glassell Park As Bill Sees It / Habitat",
    day: "Saturday",
    time: "8:00 PM",
    link: "https://zoom.us/j/214686690",
    phone: "Meeting code: 214 686 690",
    notes: "10 min speaker on As Bill Sees It then lottery share"
  },
  {
    name: "LQBTQ Topic Participation",
    day: "Saturday",
    time: "8:00 PM",
    link: "https://zoom.us/j/145634734",
    phone: "",
    notes: "LQBTQ , Topic Participation"
  },
  {
    name: "Panel - Burbank Group",
    day: "Saturday",
    time: "8:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Panel may change unless otherwise stated"
  },
  {
    name: "QUARANTINED ALL-STARS",
    day: "Saturday",
    time: "8:00 PM",
    link: "https://zoom.us/j/6987730637",
    phone: "(669) 900-6833",
    code: "6987730637#",
    notes: "15 min speaker ; tag team"
  },
  {
    name: "Saturday Brunswick 8pm",
    day: "Saturday",
    time: "8:00 PM",
    link: "https://zoom.us/j/236446407",
    phone: "(669) 900-6833",
    code: "236446407#",
    notes:
      "5-10 minute speaker followed by tagged topic discussion participation/sharing."
  },
  {
    name: "Hollywood Squares",
    day: "Saturday",
    time: "8:30 PM",
    link: "https://zoom.us/j/299908121",
    phone: "(346) 248-7799",
    code: "299908121#",
    notes: "one hour and thirty minutes, two speaker meeting"
  },
  {
    name: "Ohio Street Beachcomber Meeting",
    day: "Saturday",
    time: "8:30 PM",
    link: "https://zoom.us/j/947768885",
    phone: "(669) 900-9128",
    code: "947768885#",
    notes: "2 speaker meeting"
  },
  {
    name: "Dark Secrets",
    day: "Saturday",
    time: "9:00 PM",
    link: "https://zoom.us/j/102993439?pwd=aHFTTUc2bXJwTWdBTS9vbDBSWEhMZz09",
    phone: "(253) 215-8782",
    code: "102993439#",
    notes:
      "Sponsor & Sponsee share on one of the steps followed by Q&A and sharing"
  },
  {
    name: "Candlelight - Burbank Group",
    day: "Saturday",
    time: "10:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "candlelight"
  },
  {
    name: "Literature Study - Burbank Group",
    day: "Saturday",
    time: "11:30 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "AA Related"
  },
  {
    name: "SAT 12 midnight - THE BEGINNING OR THE END",
    day: "Saturday",
    time: "11:55 PM",
    link: "https://zoom.us/j/755443907",
    phone: "(213) 338-8477",
    code: "755443907#",
    notes: "Open Meeting, Speaker, BB readings, YPAA, 1 Hour-ish"
  },
  {
    name: "Saturday Step Study (Comedy Store)",
    day: "Saturday",
    time: "12:00 PM",
    link: "https://zoom.us/j/292523094",
    phone: "(669) 900-9128",
    code: "292523094#",
    notes: "Step Study"
  },
  {
    name: "5:30am Valley Club Emotional Sobriety",
    day: "Sunday",
    time: "5:30 AM",
    link: "https://zoom.us/j/664561304",
    phone: "",
    notes: "Leader & Participation Meeting"
  },
  {
    name: "Attitude Adjustment (Hermosa/SBAC)",
    day: "Sunday",
    time: "7:00 AM",
    link: "https://zoom.us/j/587496266",
    phone: "",
    notes: "Open, Mixed, Participation, 1Hr"
  },
  {
    name: "Valley Club 7am Sunday Participation",
    day: "Sunday",
    time: "7:00 AM",
    link: "https://zoom.us/j/963384401",
    phone: "",
    notes: "Leader & Participation"
  },
  {
    name: "Fresh Start",
    day: "Sunday",
    time: "7:30 AM",
    link: "https://zoom.us/j/2471800919",
    phone: "(669) 900-6833",
    code: "123805095#",
    notes:
      "Daily Reflection reading, no speaker, round-robin (host will choose)"
  },
  {
    name: "11th Step Meeting",
    day: "Sunday",
    time: "8:00 AM",
    link: "https://zoom.us/j/616831865",
    phone: "",
    notes: "15 Min. speaker w/participation-11th step"
  },
  {
    name: "11th Step Meeting (Redford Hall)",
    day: "Sunday",
    time: "8:00 AM",
    link: "https://zoom.us/j/616831865",
    phone: "",
    notes: "15 speaker + participation + 2 min meditation"
  },
  {
    name: "Hole In The Sky - Spiritual Discussion",
    day: "Sunday",
    time: "8:00 AM",
    link: "https://zoom.us/j/240808936",
    phone: "(669) 900-6833",
    code: "240808936#",
    notes: "Spiritual discussion/participation"
  },
  {
    name: "ORG Big Book Study",
    day: "Sunday",
    time: "8:00 AM",
    link: "https://zoom.us/j/658399494",
    phone: "",
    notes: "Big Book Study Moderated by Heather M."
  },
  {
    name: "Sunday 8 am Log Cabin Meeting",
    day: "Sunday",
    time: "8:00 AM",
    link: "https://zoom.us/j/324242924?pwd=Y3BiSmhpOEtkTmJzU2ljczQwTUpHQT09",
    phone: "",
    notes: "Two Speakers One Hour (No Participation)"
  },
  {
    name: "11th Step Meditation",
    day: "Sunday",
    time: "8:15 AM",
    link: "https://zoom.us/j/854228928",
    phone: "(166) 990-06833",
    code: "854228928#",
    notes:
      "West LA Alano Club 11th Step Meditation Meeting 10 minutes of meditation, speaker & participation"
  },
  {
    name: "Sunday Morning Tropical 8:30 Speaker Meeting",
    day: "Sunday",
    time: "8:30 AM",
    link: "https://zoom.us/j/150516814",
    phone: "",
    notes: "15 min speaker and participation"
  },
  {
    name: "Attitude Adjustment",
    day: "Sunday",
    time: "9:00 AM",
    link: "https://zoom.us/j/5438733759",
    phone: "(346) 248-7799",
    code: "5438733759#",
    notes: "15 min speaker, participation, 1 hr"
  },
  {
    name: "Decade and a Day",
    day: "Sunday",
    time: "9:00 AM",
    link: "https://zoom.us/j/212287561",
    phone: "(669) 900-6833",
    code: "212287561#",
    notes: "Mixed, Solutions, 15 min Speaker + participation, Secretary Doc P.,"
  },
  {
    name: "On Awakening",
    day: "Sunday",
    time: "9:00 AM",
    link: "https://zoom.us/j/989150099",
    phone: "(669) 900-6833",
    code: "989150099#",
    notes: "11th Step Speaker/Participation Meeting, LGBTQ+"
  },
  {
    name: "Spiritual Meeting - Burbank Group",
    day: "Sunday",
    time: "9:00 AM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "AA meeting"
  },
  {
    name: "Sunday Am Miracle on Ohio",
    day: "Sunday",
    time: "9:00 AM",
    link: "https://zoom.us/j/657357243",
    phone: "(669) 900-6833",
    code: "657357243#\nPassword: 050035",
    notes: "Speaker"
  },
  {
    name: "The Page Turner Big Book Study Meeting",
    day: "Sunday",
    time: "9:00 AM",
    link: "https://zoom.us/j/334301997?pwd=T2RqUHdBMTRETGFnYkgrUkloMTNrUT09",
    phone: "(253) 215-8782",
    code: "334301997#",
    notes: "We read 3 pages from Big Book Every Meeting!!"
  },
  {
    name: "Upon Awakening",
    day: "Sunday",
    time: "9:00 AM",
    link: "https://zoom.us/j/989150099",
    phone: "(669) 900-6833",
    code: "989150099#",
    notes: "11th Step Speaker/Participation Meeting, LGBTQ+"
  },
  {
    name: "Upon Awakening",
    day: "Sunday",
    time: "9:00 AM",
    link: "https://zoom.us/j/989150099",
    phone: "(669) 900-6833",
    code: "989150099#",
    notes: "11th Step Speaker/Participation Meeting"
  },
  {
    name: "Malibu Sunday Morning Big Book Study",
    day: "Sunday",
    time: "9:30 AM",
    link: "https://zoom.us/j/386997286",
    phone: "(669) 900-9128",
    code: "386997286#",
    notes: "Big Book Study, 15 Minute Speaker, Group Participation"
  },
  {
    name: "Wake And Skate",
    day: "Sunday",
    time: "9:30 AM",
    link: "https://zoom.us/j/9370043203",
    phone: "",
    notes: "15-20 min speaker share and involuntary sharing until 10:30"
  },
  {
    name: "Café Tropical Sunday 10 AM",
    day: "Sunday",
    time: "10:00 AM",
    link: "https://zoom.us/j/451542354",
    phone: "",
    notes: "1.5 hour meeting; 15min speaker; book study (stories)"
  },
  {
    name: "Good, Bad, and Indifferet Women’s Stag (W)",
    day: "Sunday",
    time: "10:00 AM",
    link: "https://zoom.us/j/9167331272?pwd=dGJ1NUVlcU80anNvN1JPQmlLMjAwdz09",
    phone: "(669) 900-6833",
    code: "9167331272#\nPassword: 17751",
    notes: "Women’s meeting. 3-5min. Lead/Participation meeting"
  },
  {
    name: "I Am Stuck At Home Group",
    day: "Sunday",
    time: "10:00 AM",
    link: "https://zoom.us/j/5841241194",
    phone: "(669) 900-6833",
    code: "5841241194#",
    notes: "AA Speaker and Participation-60min (100 PPL Max)"
  },
  {
    name: "King’s Head Sunday Morning Daily Reflections Meeting",
    day: "Sunday",
    time: "10:00 AM",
    link: "https://zoom.us/j/210029229",
    phone: "(669) 900-9128",
    code: "210029229#",
    notes: "Daily Reflections Speaker/Participation meeting"
  },
  {
    name: "No Reservations Womens Meeting (W)",
    day: "Sunday",
    time: "10:00 AM",
    link: "https://zoom.us/j/5289050952",
    phone: "",
    notes: "Women’s Meeting"
  },
  {
    name: "Pacific Palisades Workshop",
    day: "Sunday",
    time: "10:00 AM",
    link: "https://zoom.us/j/659242424",
    phone: "(669) 900-6833",
    code: "659242424#",
    notes: "Speaker/Workshop"
  },
  {
    name: "Sunday Morning Log Cabin",
    day: "Sunday",
    time: "10:00 AM",
    link: "https://zoom.us/j/514501335?pwd=NU9xWjRNbCtGdHF5OFAvNWRnTUlJdz09",
    phone: "(669) 900-6833",
    code: "514501335#",
    notes: "LGBTQ Speaker Meeting"
  },
  {
    name: "Sunday Morning Trudgers",
    day: "Sunday",
    time: "10:00 AM",
    link: "https://zoom.us/j/234938810",
    phone: "+16699009128",
    code: "234938810#",
    notes: "Speaker, Participation"
  },
  {
    name: "Robertson Originals",
    day: "Sunday",
    time: "10:30 AM",
    link: "https://zoom.us/j/348087265",
    phone: "(669) 900-9128",
    code: "348087265#",
    notes: "1 hour Speaker meeting"
  },
  {
    name: "Spiritual Solutions",
    day: "Sunday",
    time: "10:30 AM",
    link: "https://zoom.us/s/5912185236",
    phone: "(166) 990-09128",
    code: "5912185236#",
    notes: "Speaker Meeting"
  },
  {
    name: "Pathfinders 11:00 AM",
    day: "Sunday",
    time: "11:00 AM",
    link: "https://zoom.us/j/307967847?pwd=ZzNiREd1MStnTEFTMGprOW84REdHdz09",
    phone: "",
    notes: "Open Discussion"
  },
  {
    name: "Women’s Sunday Morning-Chandler Lodge (W)",
    day: "Sunday",
    time: "11:00 AM",
    link: "https://zoom.us/j/840932018",
    phone: "",
    notes: "Women’s meeting, 1 hour 15 min, speaker and share"
  },
  {
    name: "3rd & Gardner Meeting",
    day: "Sunday",
    time: "11:30 AM",
    link: "https://zoom.us/j/549328587",
    phone: "",
    notes: "90 minute meeting - Morgan H. Secretary"
  },
  {
    name: "Speaker Meeting - Burbank Group",
    day: "Sunday",
    time: "11:30 AM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Speaker Meeting"
  },
  {
    name: "WARG Newcomer’s Meeting",
    day: "Sunday",
    time: "12:00 PM",
    link: "https://zoom.us/j/5444707170",
    phone: "(669) 900-6833",
    code: "5444707170#",
    notes: "Newcomers Participation Meeting"
  },
  {
    name: "Hole In The Sky - Big Book Study",
    day: "Sunday",
    time: "12:30 PM",
    link: "https://zoom.us/j/787468826",
    phone: "(669) 900-6833",
    code: "787468826#",
    notes: "Big Book study"
  },
  {
    name: "Cinderella Solutions Women’s Meeting",
    day: "Sunday",
    time: "4:00 PM",
    link: "https://zoom.us/j/100678036",
    phone: "",
    notes: "Women’s Meeting + 15min Speaker + Participation"
  },
  {
    name: "Hole In The Sky - Sunday 4:30 Meeting (Mixed)",
    day: "Sunday",
    time: "4:30 PM",
    link: "https://zoom.us/j/831719356",
    phone: "(669) 900-6833",
    code: "831719356#",
    notes: "Co-Ed participation meeting"
  },
  {
    name: "As Bill Sees it - Burbank Group",
    day: "Sunday",
    time: "5:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "As Bill sees it.."
  },
  {
    name: "Big Book Comes Alive Group",
    day: "Sunday",
    time: "5:00 PM",
    link: "https://zoom.us/j/502755096/",
    phone: "(669) 900-6833",
    code: "502755096#",
    notes: "Big Book study"
  },
  {
    name: "FAITH AT WORK Rodeo Drive Alt til mtg returns to home",
    day: "Sunday",
    time: "5:00 PM",
    link: "https://zoom.us/j/211059158?pwd=TCtLYjhvOUVORjZLNHlicHZCaWpPQT09",
    phone: "",
    notes: "Closed AA 10 Min Speaker Participatiob"
  },
  {
    name: "Glendale Recovery Group",
    day: "Sunday",
    time: "5:00 PM",
    link: "https://zoom.us/j/302519007",
    phone: "(646) 558-8656",
    code: "302519007#",
    notes: ""
  },
  {
    name: "Sunday Soul Food",
    day: "Sunday",
    time: "5:00 PM",
    link: "https://zoom.us/j/565239641",
    phone: "(669) 900-6833",
    code: "565239641#",
    notes: "1 hour & 15 Minutes -Hour Speaker/Share"
  },
  {
    name: "Sunday Speaker Meeting",
    day: "Sunday",
    time: "5:00 PM",
    link: "https://zoom.us/j/485882374",
    phone: "",
    notes: ""
  },
  {
    name: "Sunlight of the Spirit (Tropical)",
    day: "Sunday",
    time: "5:00 PM",
    link: "https://zoom.us/j/310546428",
    phone: "(669) 900-6833",
    code: "310546428#",
    notes:
      "NOTE: MEDITATION AT BEGINNING, PLEASE ENTER QUIETLY.\n5 min meditation + 15 min spkr + participation"
  },
  {
    name: "Virtual ReAAlity - Speaker + Participation",
    day: "Sunday",
    time: "5:00 PM",
    link: "https://zoom.us/j/484612311",
    phone: "",
    notes: "10 Min Speaker + Participation"
  },
  {
    name: "WLA Co-Ed Speaker Meeting",
    day: "Sunday",
    time: "5:00 PM",
    link: "https://zoom.us/j/485882374",
    phone: "",
    notes: "Co-Ed, 10min Speaker"
  },
  {
    name: "Positives In Sobriety",
    day: "Sunday",
    time: "5:30 PM",
    link: "https://zoom.us/j/426056640",
    phone: "(669) 900-6833",
    code: "426056640#",
    notes: "Open Meeting, LGBTQ+ Friendly, ASL Interpreter"
  },
  {
    name: "Dunsmore Sunday Speakers meeting",
    day: "Sunday",
    time: "6:00 PM",
    link: "https://zoom.us/j/577380499",
    phone: "",
    notes: "1 hour speakers meeting open"
  },
  {
    name: "Life After 10",
    day: "Sunday",
    time: "6:00 PM",
    link: "https://zoom.us/j/2213408022",
    phone: "",
    notes: "10min speaker, participation"
  },
  {
    name: "Sundowners",
    day: "Sunday",
    time: "6:00 PM",
    link: "https://zoom.us/j/116995743",
    phone: "(669) 900-6833",
    code: "116995743#",
    notes: "Open Speaker Meeting"
  },
  {
    name: "The Fire The Rose Jocelyn Park Santa Monica, CA",
    day: "Sunday",
    time: "6:15 PM",
    link: "https://zoom.us/j/2728588136",
    phone: "",
    notes: "Speaker/Participation closed meeting 1 hour"
  },
  {
    name: "Fresh Start",
    day: "Sunday",
    time: "6:30 PM",
    link: "https://zoom.us/j/485516350",
    phone: "(669) 900-9128",
    code: "485516350#",
    notes: "Newcomer meeting, 10min speaker then 3min shares"
  },
  {
    name: "Hollywood Young People’s Sunday Speaker",
    day: "Sunday",
    time: "6:30 PM",
    link: "https://zoom.us/j/803689016",
    phone: "",
    notes: "1 hour Young Peoples 2 speaker meeting; no participation"
  },
  {
    name: "Live And Let Live AA",
    day: "Sunday",
    time: "6:30 PM",
    link: "https://usjoin.freeconferencecall.com",
    phone: "1 425 436-6374, 375072#",
    notes: "LGBT, Speaker, Paticipation,"
  },
  {
    name: "Malibu Methodist Sunday 6:30 Newcomers Meeting",
    day: "Sunday",
    time: "6:30 PM",
    link: "https://zoom.us/j/6529951198",
    phone: "(669) 900-6833",
    code: "6529951198#",
    notes: "Newcomers, 20 minute share, then open for sharing"
  },
  {
    name: "Hollywood Dell Meditation",
    day: "Sunday",
    time: "7:00 PM",
    link: "https://zoom.us/j/661957944",
    phone: "",
    notes: "11th step meeting (one hour long with 20 meditation at the end)"
  },
  {
    name: "Step Study - Burbank Group",
    day: "Sunday",
    time: "7:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Step with the Burbank Group"
  },
  {
    name: "Sunday Night Ohio",
    day: "Sunday",
    time: "7:00 PM",
    link: "https://zoom.us/j/802496652",
    phone: "(166) 990-06833",
    code: "802496652",
    notes: "Participation + Speaker"
  },
  {
    name: "Sunday Night Rolling Hills Estates Big Book Study",
    day: "Sunday",
    time: "7:00 PM",
    link: "https://zoom.us/j/221580229",
    phone: "",
    notes: "Big Book study ",
    code: " read a paragraph and share"
  },
  {
    name: "Beginners Candlelight Discussion",
    day: "Sunday",
    time: "7:30 PM",
    link: "https://zoom.us/j/505403032",
    phone: "",
    notes: "Mixed meeting, ten minute speaker, 1.5h"
  },
  {
    name: "Marina Center Sunday Night Recovery LIVES ON!",
    day: "Sunday",
    time: "7:30 PM",
    link: "https://zoom.us/j/205513210",
    phone: "(669) 900-9128",
    code: "205513210#",
    notes:
      "7:30PM PST. Open. Speaker meeting.\nAA Speaker Series! Doors Open @ 7:10PM PST"
  },
  {
    name: "Venice Beach Group Sunday Night 3rd Step Meeting",
    day: "Sunday",
    time: "7:30 PM",
    link: "https://zoom.us/j/617613609?pwd=T3pMelVKbkE2MnhLWUtwMG82U1JPUT09",
    phone: "(669) 900-6833",
    code: "617613609#",
    notes: "1 Hour Open Speaker/ Participation Meeting"
  },
  {
    name: "Circle of Love (W)",
    day: "Sunday",
    time: "8:00 PM",
    link: "https://zoom.us/j/4358362050",
    phone: "(669) 900-6833",
    code: "4358362050#",
    notes: "Women’s Meeting, 15 min speaker, participation"
  },
  {
    name: "ORG Women’s Participation (W)",
    day: "Sunday",
    time: "8:00 PM",
    link: "https://zoom.us/j/442211074",
    phone: "",
    notes: "Women’s Meeting"
  },
  {
    name: "Sunday Sobriety Hour Speaker (26th and Broadway)",
    day: "Sunday",
    time: "8:00 PM",
    link: "https://zoom.us/j/756958333",
    phone: "",
    notes: "45 Minute Speaker"
  },
  {
    name: "Sunday Speakeasy",
    day: "Sunday",
    time: "8:00 PM",
    link: "https://zoom.us/j/960521144?pwd=V0JnZXNIWnVvSTZMLzJhRWdxbnZVdz09",
    phone: "(669) 900-6833",
    code: "960521144#",
    notes: "Speaker plus topic sharing. Open & mixed. Password SPEAKEASY"
  },
  {
    name: "The Clam Bake (W)",
    day: "Sunday",
    time: "8:00 PM",
    link: "https://bluejeans.com/4242021861",
    phone: "(888) 748-9073",
    code: "4242021861#",
    notes: "Women’s Meeting, 25min speaker, participation"
  },
  {
    name: "Tell It Like It Is",
    day: "Sunday",
    time: "8:15 PM",
    link: "https://zoom.us/j/534848182",
    phone: "",
    notes: "20min speaker / participation"
  },
  {
    name: "Cafe Tropical Sunday Night 8:30p",
    day: "Sunday",
    time: "8:30 PM",
    link: "https://zoom.us/j/663343730",
    phone: "(669) 900-6833",
    code: "663343730#",
    notes: "15 minute speaker, tag participation followed by raise your hand"
  },
  {
    name: "Participation - A Meeting Called Laura",
    day: "Sunday",
    time: "8:30 PM",
    link: "https://zoom.us/j/989884123?pwd=V2FISFhQaVlRckNsM0t0bFpiVGVPZz09",
    phone: "(166) 990-06833",
    code: "989884123#",
    notes: "LGBTQ+ Speaker/Participation"
  },
  {
    name: "Promises Candlelight - Burbank Group",
    day: "Sunday",
    time: "9:00 PM",
    link: "https://zoom.us/j/3667993329",
    phone: "",
    notes: "Candlelight"
  },
  {
    name: "Sunlight of the World Spirit - Speaker/Participation",
    day: "Sunday",
    time: "9:00 PM",
    link: "https://zoom.us/j/951810083",
    phone: "(669) 900-6833",
    code: "951810083#",
    notes:
      "Closed Meeting of Alcoholics Anonymous for those who identify as an alcoholic or have the desire to stop drinking."
  },
  {
    name: "La Puente Center: Sunday Nights As Bill See It",
    day: "Sunday",
    time: "10:00 PM",
    link: "https://zoom.us/j/5169726547",
    phone: "",
    notes:
      "Have your books handy! You pick your reading and share on it (As Bill Sees It only)"
  },
  {
    name: "Sunday Night Marina Center Late Night",
    day: "Sunday",
    time: "11:00:00 PM",
    link: "https://zoom.us/j/579426584",
    phone: "(669) 900-6833",
    code: "579426584#",
    notes: "15-20 Minute Speaker + Participation / Open Meeting"
  }
];

export default meetingSeed;
