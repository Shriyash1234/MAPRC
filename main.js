const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejsLint = require('ejs-lint');
var stringSimilarity = require("string-similarity");
const app = express();
const User = require("./users")
app.use(bodyParser.urlencoded({extended:true}))
app.use("/assests",express.static("assests"))
var database
const session = require('express-session');
const passport = require('passport');
require('./auth');
app.locals = require('./views/helper')
app.set("view engine","ejs");
require('https').globalAgent.options.rejectUnauthorized = false;
// const items = require('./new_response.json');
const users = require('./juinor_response.json');
const items = require('./responses.json')
const confession = require('./Confessions.json')
const photo = require('./memorylane2.json')


//  for the search box
function arrayMax(array) {
  return array.reduce(function(a, b) {
    return Math.max(a, b);
  });
}
const mail_list = ["akanksham@iitgn.ac.in"	,"praneetat@iitgn.ac.in", "nidhis@iitgn.ac.in"	,"gunjan.m@iitgn.ac.in"	,"aditia@iitgn.ac.in"	,"ritum@iitgn.ac.in"	,"dhananjay.singh@iitgn.ac.in"	,"goutamp@iitgn.ac.in"	,"aadishreed@iitgn.ac.in"	,"priyaj@iitgn.ac.in"	,"athulkr@iitgn.ac.in"	,"vimalp@iitgn.ac.in"	,"shirisha.a@iitgn.ac.in"	,"ashish.chavan@iitgn.ac.in"	,"shruti.katpara@iitgn.ac.in"	,"amitk@iitgn.ac.in"	,"prasad.athave@iitgn.ac.in"	,"utkarsh.nanda@iitgn.ac.in"	,"jani.dhyey@iitgn.ac.in"	,"lovepreet.singh@iitgn.ac.in"	,"pradip.prajapati@iitgn.ac.in"	,"smit.patel@iitgn.ac.in"	,"ankitam@iitgn.ac.in"	,"amitt@iitgn.ac.in"	,"rajpreetk@iitgn.ac.in"	,"gauravb@iitgn.ac.in"	,"prashants@iitgn.ac.in"	,"hiralrl@iitgn.ac.in"	,"samanawayd@iitgn.ac.in"	,"abhishek.g@iitgn.ac.in"	,"surajr@iitgn.ac.in"	,"pankajk@iitgn.ac.in"	,"vinod.ku@iitgn.ac.in"	,
"pintup@iitgn.ac.in"	,
"uzma.s@iitgn.ac.in"	,
"vikashk@iitgn.ac.in"	,
"divyanshc@iitgn.ac.in"	,
"javaidr@iitgn.ac.in"	,
"tarishag@iitgn.ac.in"	,
"tarunb@iitgn.ac.in"	,
"ratnikag@iitgn.ac.in"	,
"harshavardhan.g@iitgn.ac.in"	,
"pabitram@iitgn.ac.in"	,
"keshavc@iitgn.ac.in"	,
"anuk@iitgn.ac.in"	,
"prathamesh.vibhute@iitgn.ac.in"	,
"nikhil.murkute@iitgn.ac.in"	,
"nikhil.yadav@iitgn.ac.in"	,
"aastha.jivrajani@iitgn.ac.in"	,
"aarchia@iitgn.ac.in"	,
"sumit.kumar@iitgn.ac.in"	,
"vaishnavi.kokadwar@iitgn.ac.in"	,
"utkarshs@iitgn.ac.in"	,
"kamlesh.arun@iitgn.ac.in"	,
"hirenrs@iitgn.ac.in"	,
"ajinkya.pawar@iitgn.ac.in"	,
"lokeshs@iitgn.ac.in"	,
"pratyush.bhatt@iitgn.ac.in"	,
"sunilkt@iitgn.ac.in"	,
"pushan.patel@iitgn.ac.in"	,
"naseef.p@iitgn.ac.in"	,
"abhijeets@iitgn.ac.in"	,
"abhishekt@iitgn.ac.in"	,
"nikkim@iitgn.ac.in"	,
"deepikad@iitgn.ac.in"	,
"anitaa@iitgn.ac.in"	,
"dasaris@iitgn.ac.in"	,
"shashi.sarraf@iitgn.ac.in"	,
"priyad@iitgn.ac.in"	,
"laxmim@iitgn.ac.in"	,
"jay.shah@iitgn.ac.in"	,
"pratyashab@iitgn.ac.in"	,
"jessica.satyarthi@iitgn.ac.in"	,
"ritu.verma@iitgn.ac.in"	,
"vishwap@iitgn.ac.in"	,
"aakasha@iitgn.ac.in"	,
"rohan.shirodkar@iitgn.ac.in"	,
"varadk@iitgn.ac.in"	,
"jaydeep.ramnani@iitgn.ac.in"	,
"hardik.khichi@iitgn.ac.in"	,
"paresh.mody@iitgn.ac.in"	,
"m.manidhar@iitgn.ac.in"	,
"harin@iitgn.ac.in"	,
"nilesh.thakar@iitgn.ac.in"	,
"aman.18110014@iitgn.ac.in"	,
"dhruvip@iitgn.ac.in"	,
"shardul.kulkarni@iitgn.ac.in"	,
"nitin.gupta@iitgn.ac.in"	,
"meenusa@iitgn.ac.in"	,
"jitendrak@iitgn.ac.in"	,
"hemana@iitgn.ac.in"	,
"gauravp@iitgn.ac.in"	,
"hrushikeshp@iitgn.ac.in"	,
"bazelam@iitgn.ac.in"	,
"priyankap@iitgn.ac.in"	,
"s.ganesh@iitgn.ac.in"	,
"mohammad.syed@iitgn.ac.in"	,
"dilip.khandare@iitgn.ac.in"	,
"amank@iitgn.ac.in"	,
"amarm@iitgn.ac.in"	,
"yashi.gaur@iitgn.ac.in"	,
"aditya.pusalkar@iitgn.ac.in"	,
"siddharthp@iitgn.ac.in"	,
"sanket.vadhvana@iitgn.ac.in"	,
"harish.meghwal@iitgn.ac.in"	,
"venkata.reddy@iitgn.ac.in"	,
"khushwants@iitgn.ac.in"	,
"aishna.agrawal@iitgn.ac.in"	,
"tanmay.jain@iitgn.ac.in"	,
"simrant@iitgn.ac.in"	,
"dhruvi.gondalia@iitgn.ac.in"	,
"vakil.yatharth@iitgn.ac.in"	,
"gaurav.dalmia@iitgn.ac.in"	,
"gokul.raman@iitgn.ac.in"	,
"gupta.prakash@iitgn.ac.in"	,
"janvi.thakkar@iitgn.ac.in"	,
"shah.jay@iitgn.ac.in"	,
"nishikant.parmar@iitgn.ac.in"	,
"aman.sharma@iitgn.ac.in"	,
"keerthyv@iitgn.ac.in"	,
"roopak.sharma@iitgn.ac.in"	,
"meena.ashish@iitgn.ac.in"	,
"devanshis@iitgn.ac.in"	,
"deependrad@iitgn.ac.in"	,
"amar.tiwari@iitgn.ac.in"	,
"vinayr@iitgn.ac.in"	,
"raghav.goyal@iitgn.ac.in"	,
"manish.dave@iitgn.ac.in"	,
"himanshu.18110065@iitgn.ac.in"	,
"khushbup@iitgn.ac.in"	,
"udit.18110176@iitgn.ac.in"	,
"atul.patidar@iitgn.ac.in"	,
"wardha.w@iitgn.ac.in"	,
"amayg@iitgn.ac.in"	,
"dishank.goel@iitgn.ac.in"	,
"pankajp@iitgn.ac.in"	,
"harshits@iitgn.ac.in"	,
"niyatis@iitgn.ac.in"	,
"bhanu.singh@iitgn.ac.in"	,
"mohammad.shahid@iitgn.ac.in"	,
"shashi.18110157@iitgn.ac.in"	,
"pushkar.mujumdar@iitgn.ac.in"	,
"kishan.singh@iitgn.ac.in"	,
"dhruvi.lodhavia@iitgn.ac.in"	,
"kalyan.reddy@iitgn.ac.in"	,
"siddharth.soni@iitgn.ac.in"	,
"remiyar@iitgn.ac.in"	,
"yash.kamble@iitgn.ac.in"	,
"pravin.hivare@alumni.iitgn.ac.in"	,
"rachit.shrimal@iitgn.ac.in"	,
"avinash.18110030@iitgn.ac.in"	,
"yashr@iitgn.ac.in"	,
"vartikam@iitgn.ac.in"	,
"bhanupratapr@iitgn.ac.in"	,
"sachin.yadav@iitgn.ac.in"	,
"bhartim@iitgn.ac.in"	,
"dhanesh.bhutada@iitgn.ac.in"	,
"animeshs@iitgn.ac.in"	,
"manikm@iitgn.ac.in"	,
"rajkg@iitgn.ac.in"	,
"kashisht@iitgn.ac.in"	,
"sitarams@iitgn.ac.in"	,
"rupulc@iitgn.ac.in"	,
"asmitak@iitgn.ac.in"	,
"ayushim@iitgn.ac.in"	,
"kailash.kumar@iitgn.ac.in"	,
"vishnub@iitgn.ac.in"	,
"neelamp@iitgn.ac.in"	,
"srinidhip@iitgn.ac.in"	,
"sachins@iitgn.ac.in"	,
"sandeeps@iitgn.ac.in"	,
"vagisha.18110179@iitgn.ac.in"	,
"devvrat.joshi@iitgn.ac.in"	,
"akangshad@iitgn.ac.in"	,
"srikanthp@iitgn.ac.in"	,
"mukeshg@iitgn.ac.in"	,
"vijays@iitgn.ac.in"	,
"juhis@iitgn.ac.in"	,
"ritikag@iitgn.ac.in"	,
"akanshav@iitgn.ac.in"	,
"aarthim@iitgn.ac.in"	,
"charug@iitgn.ac.in"	,
"tanisha.a@iitgn.ac.in"	,
"nikhil.borase@iitgn.ac.in"	,
"artivishwa@iitgn.ac.in"	,
"viraj.shah@iitgn.ac.in"	,
"prashant.ramteke@iitgn.ac.in"	,
"alpha.topno@iitgn.ac.in"	,
"kshitija.anam@iitgn.ac.in"	,
"laxman.18110093@iitgn.ac.in"	,
"lavanya.naik@iitgn.ac.in"	,
"maitreya.thakur@iitgn.ac.in"	,
"praveen.venkatesh@iitgn.ac.in"	,
"bhavya.gupta@iitgn.ac.in"	,
"harshit.kumar@iitgn.ac.in"	,
"dev.patel@iitgn.ac.in"	,
"vijendra.meena@iitgn.ac.in"	,
"satyar@iitgn.ac.in"	,
"dhruv.bukinkere@iitgn.ac.in"	,
"athirak@iitgn.ac.in"	,
"ayush.lodha@iitgn.ac.in"	,
"venkataprudvi.g@iitgn.ac.in"	,
"lokesht@iitgn.ac.in"	,
"atmadeeps@iitgn.ac.in"	,
"rahul.patel@iitgn.ac.in"	,
"rishi.patidar@iitgn.ac.in"	,
"satyam.kumar@iitgn.ac.in"	,
"vaibhav.sharma@iitgn.ac.in"	,
"priyam.tongia@iitgn.ac.in"	,
"nakumdivyaraj@iitgn.ac.in"	,
"neel.kirankumar@iitgn.ac.in"	,
"anupam.kumar@iitgn.ac.in"	,
"jayesh.khanna@iitgn.ac.in"	,
"aishwarya.malve@iitgn.ac.in"	,
"jhansi.boddu@iitgn.ac.in"	,
"khushi.j@iitgn.ac.in"	,
"yash.meshram@iitgn.ac.in"	,
"sumank@iitgn.ac.in"	,
"suryansh.kumar@iitgn.ac.in"	,
"aditi.gera@iitgn.ac.in"	,
"vijayr@iitgn.ac.in"	,
"prakash.daga@iitgn.ac.in"	,
"sowmya.selva@iitgn.ac.in"	,
"pradeep.saini@iitgn.ac.in"	,
"chris.francis@iitgn.ac.in"	,
"kuntal.patel@iitgn.ac.in"	,
"hariharan.parmar@iitgn.ac.in"	,
"aarish.shah@iitgn.ac.in"	,
"sahil.ingale@iitgn.ac.in"	,
"robin.kumar@iitgn.ac.in"	,
"anas.ali@iitgn.ac.in"	,
"abhiraj.bhasin@iitgn.ac.in"	,
"arpit.kaushal@iitgn.ac.in"	,
"tanmay.sharma@iitgn.ac.in"	,
"ushmag@iitgn.ac.in"	,
"rahulkm@iitgn.ac.in"	,
"sudipd@iitgn.ac.in"	,
"preeti.18110128@iitgn.ac.in"	,
"pranay.katike@iitgn.ac.in"	,
"dhanyasree.g@iitgn.ac.in"	,
"apoorvas@iitgn.ac.in"	,
"srimadhavi.r@alumni.iitgn.ac.in"	,
"madhumitam@iitgn.ac.in"	,
"kaustuvs@iitgn.ac.in"	,
"pranshu.kumar@iitgn.ac.in"	,
"pujarib@iitgn.ac.in"	,
"utsav.pandey@alumni.iitgn.ac.in"	,
"ektaj@iitgn.ac.in"	,
"janhavi.premi@iitgn.ac.in"	,
"rohit.verma@iitgn.ac.in"	,
"mithun.ravichandran@iitgn.ac.in"	,
"varun.jain@iitgn.ac.in"	,
"urmilar@iitgn.ac.in"	,
"bhavesh.solanki@iitgn.ac.in"	,
"aditya.tripathi@iitgn.ac.in"	,
"kushagra.sharma@iitgn.ac.in"	,
"shubhang.trivedi@iitgn.ac.in"	,
"shivam.sahni@iitgn.ac.in"	,
"sakshi.baheti@iitgn.ac.in"	,
"prasanna.d@iitgn.ac.in"	,
"arpit.patel@iitgn.ac.in"	,
"gupta.rahul@iitgn.ac.in"	,
"abhinav.singh@iitgn.ac.in"	,
"preeti.chiluveru@iitgn.ac.in"	,
"parasn@iitgn.ac.in"	,
"kartik.hillal@iitgn.ac.in"	,
"jeevanjyotid@iitgn.ac.in"	,
"aakashp@iitgn.ac.in"	,
"abhinandad@iitgn.ac.in"	,
"amey.kulkarni@iitgn.ac.in"	,
"yogesh.kabra@iitgn.ac.in"	,
"abhinav.meena@iitgn.ac.in"	,
"amish.raj@iitgn.ac.in"	,
"manisha.amireddy@iitgn.ac.in"	,
"ksashin@iitgn.ac.in"	,
"shah.viraj@iitgn.ac.in"	,
"dhruv.menon@iitgn.ac.in"	,
"vivek.modi@iitgn.ac.in"	,
"anjanig@iitgn.ac.in"	,
"khushbook@iitgn.ac.in"	,
"karthik.poreddy@iitgn.ac.in"	,
"rwik.rana@iitgn.ac.in"	,
"shubham.gond@iitgn.ac.in"	,
"hetvi.shastri@iitgn.ac.in"	,
"joshna.gadhavi@iitgn.ac.in"	,
"mihir.jain@iitgn.ac.in"	,
"amit.sunda@iitgn.ac.in"	,
"jaydeep.kakadiya@iitgn.ac.in"	,
"amlin.jose@iitgn.ac.in"	,
"jayesh.salunkhe@iitgn.ac.in"	,
"ayush.kumar@iitgn.ac.in"	,
"souritra.garai@iitgn.ac.in"	,
"hymab@iitgn.ac.in"	,
"devendra.singh@iitgn.ac.in"	,
"mohitk@iitgn.ac.in"	,
"rakeshnaidu.p@iitgn.ac.in"	,
"ritikap@iitgn.ac.in"	,
"poojan.modi@iitgn.ac.in"	,
"palak.purohit@iitgn.ac.in"	,
"vishal.bamania@iitgn.ac.in"	,
"siddarth.maddela@iitgn.ac.in"	,
"prankush.agarwal@iitgn.ac.in"	,
"jitender.kumar@iitgn.ac.in"	,
"tanishque.zaware@iitgn.ac.in"	,
"yuktig@iitgn.ac.in"	,
"shivanshu.sharma@iitgn.ac.in"	,
"navneet.kaur@iitgn.ac.in"	,
"harsh.patel@iitgn.ac.in"	,
"vaibhav.saini@iitgn.ac.in"	,
"vrutik.shah@iitgn.ac.in"	,
"dhruvin.patel@iitgn.ac.in"	,
"srujan.pandya@iitgn.ac.in"	,
"krish.gupta@iitgn.ac.in"	,
"bhanu.jarwal@iitgn.ac.in"	,
"deepesh.pankaj@iitgn.ac.in"	,
"arpita.kabra@iitgn.ac.in"	,
"hitesh.joya@iitgn.ac.in"	,
"unnat.dave@iitgn.ac.in"	,
"ritikap@iitgn.ac.in"	,
"vinod.ku@iitgn.ac.in"	,
"rachit.chhaya@iitgn.ac.in"	,
"madhumitam@iitgn.ac.in"	,
"sunilkt@iitgn.ac.in"	,
"simrant@iitgn.ac.in"	,
"mohitk@iitgn.ac.in"	,
"souritra.garai@iitgn.ac.in"	,
"mrityunjay.saraf@iitgn.ac.in"	,
"yogesh.dhawan@iitgn.ac.in"	,
"sagar.bisen@iitgn.ac.in"	,
"abisheks@iitgn.ac.in"	,
"shraddham@iitgn.ac.in"	,
"abhishek.pandey@iitgn.ac.in"	,
"ausula.prashanth@iitgn.ac.in"	,
"sudamam@iitgn.ac.in"	,
"anjalis@iitgn.ac.in"	,
"ankita.shah@iitgn.ac.in"	,
"anuk@iitgn.ac.in"	,
"devangshun@iitgn.ac.in"	,
"remyapk@iitgn.ac.in"	,
"dewanshid@iitgn.ac.in"	,
"sahu_shivam@iitgn.ac.in"	,
"anusheel.kaula@iitgn.ac.in"
]
var name_list = [
  "Akanksha Mudgal"	,
"Praneeta Taranekar"	,
"Nidhi M Shastri"	,
"Gunjankumar Makwana"	,
"Aditi Agarwal"	,
"Goutam Patra"	,
"Ritu Vrijender Mathuri"	,
"Dhananjay Singh"	,
"Aadishree Dixit"	,
"Priya Jain"	,
"AthulKumar R"	,
"Vimal Panara"	,
"Shirisha"	,
"Ashish Kishor Chavan"	,
"Shruti Katpara"	,
"Amit Kumar"	,
"Prasad Athave"	,
"Utkarsh Nanda"	,
"Dhyey Jani"	,
"Lovepreet Singh"	,
"Pradip Prajapati"	,
"Smit Patel"	,
"Ankita Mohanty"	,
"Amit Thakran"	,
"Rajpreet Kour "	,
"Gaurav Bhardwaj"	,
"Prashant Singh"	,
"Hiral Luhar"	,
"Samanaway Das "	,
"Abhishek Gupta"	,
"Suraj Kumar Ravidas"	,
"Pankaj kumar kumawat"	,
"Vinod Kumar"	,
"Pintu prajapat"	,
"Uzma Sarwat "	,
"Vikash Kumar"	,
"DIVYANSH CHATURVEDI"	,
"Javaid Ahmad Reshi"	,
"Tarisha Gupta"	,
"Tarun Bansal"	,
"Ratnika Gupta"	,
"G Harshavardhan (Hiking Harsha)"	,
"Pabitra Mandal"	,
"Keshav Chaudhary "	,
"Anu kumari "	,
"Prathamesh Vibhute "	,
"Nikhil Murkute"	,
"Nikhil Yadav"	,
"Aastha Jivrajani"	,
"Aarchi Agrawal"	,
"Sumit Kumar"	,
"Vaishnavi Kokadwar "	,
"Utkarsh SIngh"	,
"Kamlesh Sawadekar"	,
"Hiren Solanki"	,
"Ajinkya Shirish Pawar"	,
"Lokesh Sharma "	,
"Pratyush Bhatt"	,
"Sunilkumar Turpati"	,
"Pushan Patel "	,
"Naseef P"	,
"Abhijeet Singh"	,
"Abhishek Thakur"	,
"Nikki Mittal"	,
"Deepika"	,
"Anita"	,
"Dasari Sanjukta"	,
"SHASHI SARRAF"	,
"Priya Drashni"	,
"Laxmi Meena"	,
"Jay Shah"	,
"Pratyasha Bhardwaj"	,
"Jessica Satyarthi "	,
"Ritu Verma "	,
"Vishwa Patel "	,
"Aakash"	,
"Rohan Shirodkar"	,
"Varad P Kausadikar"	,
"Jaydeep Ramnani"	,
"Hardik Khichi"	,
"Shril Mody"	,
"Manidhar M"	,
"Hari S Nair"	,
"Devanshu Thakar"	,
"Aman"	,
"Dhruvi"	,
"Shardul Kulkarni"	,
"Nitin Kumar Gupta"	,
"Meenu S A"	,
"Jitendra Kumar "	,
"Hema Naveena A"	,
"GAURAV PAL"	,
"Hrushikesh Pawar"	,
"Bazela Manzoor"	,
"Priyanka "	,
"S Ganesh "	,
"Taha Mohammad Syed "	,
"Vaibhav Khandare"	,
"Aman kumar"	,
"Amar Chand Meena"	,
"Yashi Gaur"	,
"Aditya Pusalkar"	,
"Siddharth Prakash"	,
"Sanket Vadhvana"	,
"Harish Meghwal"	,
"Reddy Venkata Neeraj Kumar"	,
"Khushwant singh "	,
"Aishna Agrawal"	,
"Tanmay Jain"	,
"simran "	,
"Dhruvi Gondalia"	,
"Vakil Yatharth"	,
"Gaurav Dalmia "	,
"A K Gokul Raman"	,
"Shruti Prakash Gupta"	,
"Janvi Thakkar"	,
"Jay Rahul Shah"	,
"Nishikant Parmar"	,
"Aman Sharma"	,
"Keerthy V"	,
"Roopak Sharma"	,
"Ashish Kumar Meena"	,
"Devanshi Saxena"	,
"Deependra Dwivedi"	,
"Amar Deep Tiwari"	,
"Vinay Kumar Rana"	,
"Raghav Goyal"	,
"Hari Dave"	,
"Himanshu"	,
"Khushbu Patel"	,
"Udit Vyas"	,
"Atul Patidar"	,
"Wardah"	,
"Amay Gupta"	,
"Dishank Goel"	,
"Pankaj"	,
"Harshit Sharma"	,
"Niyati Shah"	,
"Bhanu Pratap Singh"	,
"MD Shahid Shareef"	,
"Shashi"	,
"Pushkar Mujumdar"	,
"Kishan Singh"	,
"Dhruvi Lodhavia"	,
"Kalyan Reddy S"	,
"Siddharth Soni"	,
"Remiya Roy"	,
"Yash Kamble"	,
"Pravin Hivare"	,
"Rachit Shrimal"	,
"Avinash "	,
"Yash Rathore"	,
"Vartika Mathur"	,
"Bhanupratap Singh Rajawat"	,
"Sachin Yadav"	,
"Bharti Mangal"	,
"Dhanesh Bhutada"	,
"Animesh Sharma"	,
"Manik"	,
"Raj Kumar Garhwal"	,
"Kashish Taneja "	,
"Sitaram"	,
"Rupul Chandna"	,
"Asmita Kushwaha"	,
"Ayushi Mittal"	,
"Kailash Kumar"	,
"Sri Vishnu Priya Balaji"	,
"Neelam Painuly"	,
"Srinidhi Pawar "	,
"Sachin Shukla"	,
"Sandeep Sharma "	,
"Vagisha "	,
"Devvrat Joshi"	,
"Akangsha Deka"	,
"Srikanth Palle"	,
"Mukesh Gupta"	,
"Vijay Sahani"	,
"Juhi Singh"	,
"Ritika Goel"	,
"Akansha Verma"	,
"Aarthi M"	,
"Charu"	,
"Tanisha Arya"	,
"Nikhil borase "	,
"Km Arti Vishwakarma "	,
"Viraj M Shah"	,
"Shlok Ramteke"	,
"Alpha Zenith Topno"	,
"Kshitija Anam"	,
"Laxman"	,
"Lavanya Naik"	,
"Maitreya Thakur"	,
"Praveen Venkatesh"	,
"Bhavya Gupta"	,
"Harshit Kumar"	,
"Dev Patel"	,
"Vijendra Meena"	,
"Satya Rajan"	,
"Dhruv Bukinkere"	,
"Athira Kottayi"	,
"Ayush Manojkumar Lodha"	,
"Gudivada Venkata Prudvi Tej"	,
"Lokesh Singh Tanwar"	,
"Atmadeep Sengupta"	,
"Rahul Patel"	,
"Rishi Patidar"	,
"Satyam Kumar"	,
"Vaibhav Sharma"	,
"Priyam Tongia"	,
"Divyaraj Nakum"	,
"Neel Patel"	,
"Anupam Kumar"	,
"Jayesh Khanna"	,
"Aishwarya Ajay Malve"	,
"Jhansi Boddu"	,
"Khushi Jain"	,
"Yash Meshram"	,
"Suman Kumar"	,
"Suryansh Kumar"	,
"Aditi Gera"	,
"Vijay kumar regar"	,
"Parth DAGA"	,
"Sowmya Tellapuram"	,
"Pradeep Saini"	,
"Chris Francis"	,
"Kuntal Patel"	,
"Hariharan Parmar"	,
"Aarish Shah"	,
"Sahil Purushottam Ingale"	,
"Robin Kumar"	,
"Anas Ali"	,
"Abhiraj Bhasin"	,
"Arpit Kaushal"	,
"Tanmay Sharma"	,
"Ushma Garg"	,
"Rahul Kumar"	,
"Sudip Das"	,
"Preeti"	,
"Pranay Deep Reddy"	,
"Dhanya Sree"	,
"Apoorva Sharma"	,
"Srimadhavi R"	,
"Madhumita Mahali"	,
"Kaustuv Singh"	,
"Pranshu Kumar Gond "	,
"Tejas pujari "	,
"Utsav"	,
"Ekta Jaiswal"	,
"Janhavi Premi"	,
"Rohit Verma"	,
"Mithun Ravichandran "	,
"Varun Jain"	,
"Urmila Regar"	,
"Bhavesh Kumar Solanki"	,
"Aditya Tripathi"	,
"Kushagra Sharma"	,
"TRIVEDI SHUBHANG KRISHNAKANT "	,
"Shivam Sahni"	,
"Sakshi Baheti"	,
"Prasanna D"	,
"Arpit Patel"	,
"Rahul Gupta"	,
"Abhinav Singh"	,
"Preeti Chiluveru"	,
"Paras Nigam"	,
"Kartik Hillal "	,
"Jeevanjyoti Das"	,
"Aakash Pandey "	,
"Abhinanda Dash"	,
"Amey Kulkarni"	,
"Sakshi Kabra"	,
"Abhinav Meena"	,
"Amish Raj"	,
"Manisha Amireddy"	,
"K S Ashin Shanly"	,
"Viraj K Shah"	,
"Dhruv Menon"	,
"Vivek Upendrakumar Modi"	,
"Anjani Gente"	,
"Khushboo Kumari"	,
"Poreddy Venkat Karthik"	,
"Rwik Rana"	,
"Shubham Gond"	,
"Hetvi Shastri"	,
"Joshna Dharmendrabhai Gadhavi"	,
"Mihir Vikram Jain"	,
"Amit Kumar Sunda "	,
"Jaydeep Kakadiya"	,
"Amlin Jose"	,
"Jayesh Salunkhe"	,
"Ayush Kumar"	,
"Souritra Garai"	,
"Hyma Balakrishnan"	,
"Devendra Singh"	,
"Mohit Kumar"	,
"Rakesh Naidu"	,
"Ritika Pahwa "	,
"Poojan Modi"	,
"Palak Purohit"	,
"Vishal Bamania"	,
"Maddela Siddarth"	,
"Prankush Agarwal"	,
"Jitender Kumar"	,
"Tanishque Zaware"	,
"Yukti Goel"	,
"Shivanshu Sharma"	,
"Navneet Kaur"	,
"Harsh Patel"	,
"Vaibhav Saini"	,
"Vrutik Shah"	,
"Dhruvin Patel"	,
"Srujan Pandya"	,
"Krish Gupta"	,
"Bhanu Jarwal"	,
"Deepesh Pankaj"	,
"Arpita Kabra"	,
"Hitesh Joya"	,
"Unnat Dave",
"Ritika Pahwa"	,
"Vinod kumar"	,
"Rachit Chhaya"	,
"Madhumita Mahali"	,
"Sunil Kumar Turpati"	,
"Simran"	,
"Mohit Kumar"	,
"Souritra Garai"	,
"Mrityunjay saraf"	,
"Yogesh Dhawan"	,
"Sagar Bisen"	,
"Abishek Sarkar"	,
"Shraddha Matkar"	,
"Abhishek K. Pandey"	,
"Ausula Prashanth"	,
"Sudama Kumar Mahto"	,
"Anjali Singh"	,
"Ankita Rameshkumar Shah"	,
"Anu kumari"	,
"Devangshu Nandi"	,
"Remya PK"	,
"Dewanshi"	,
"Shivam Sahu"	,
"Anusheel Kaula"
];

  app.get("/student/:customListName",function(req,res){
    const student_name = req.params.newName;
    const customListName = req.params.customListName;
    res.render("list2",{Items: items,listName:customListName,student_name:student_name})  
  })

  app.post("/",function(req,res){
    const arr = [];
    const student_name = req.body.newName;
    // console.log(student_name)
    if(name_list.includes(student_name)){
      var ind = name_list.indexOf(student_name)
      var mail = mail_list[ind]
      res.redirect("/student/" +mail)
    }else{
      for(i=0;i<mail_list.length;i++){
      var similarity = stringSimilarity.compareTwoStrings(student_name, mail_list[i]);
      arr.push(similarity)  
    }
    // console.log(arrayMax(arr));
      mail = mail_list[arr.indexOf(arrayMax(arr))]
      res.redirect("/student/" +mail)
  }
  })
  

  app.get("/professor",function(req,res){
    const prof = req.params.prof;
        res.render("professor_ID")
    }
  )
  app.get("/professor/prachi",function(req,res){
        res.render("prachi")
      }
    )
  app.get("/professor/manasi",function(req,res){
        res.render("manasi")
    })
  app.get("/professor/cn_pandey",function(req,res){
        res.render("cn_pandey")
      }
    )
  app.get("/professor/Soumyabrata",function(req,res){
        res.render("Soumyabrata")
      }
    )

  app.get("/professor/jooyoung",function(req,res){
        res.render("jooyoung")
      }
    )
  app.get("/professor/rraghvan",function(req,res){
    const prof = req.params.prof;
        res.render("rraghvan")
      }
    )
  app.get("/professor/saumils",function(req,res){
        res.render("saumils")
      }
    )

  app.get("/professor/spm",function(req,res){
        res.render("spm")
      }
    )
  app.get("/professor/satyajit",function(req,res){
        res.render("satyajit")
      }
    )
  app.get("/professor/mayank",function(req,res){
        res.render("mayank")
      }
    )
  app.get("/memorylane",function(req,res){
        res.render("memorylane",{photo:photo})
      }
    )
  app.get("/messages_from_juniors",function(req,res){
        res.render("messages_from_juniors",{users:users})
      }
    )
  app.get("/",function(req,res){
        res.render("home")
      }
    )
  app.get("/login",function(req,res){
        res.render("login")
      }
    )
  app.get("/meet_the_team",function(req,res){

        res.render("meet_the_team")
      }
    )
  function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
  
  app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  
 
  
  app.get('/auth/google',
  passport.authenticate('google', { successRedirect: '/',scope:
  ['email']
}));
  
  app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
      successRedirect: '/student',
      failureRedirect: '/auth/google/failure'
    })
  );
  
  app.get("/student",isLoggedIn, function(req, res){
    const student_name = req.params.newName;
        res.render("Students_IDS",{Items: items});
      }
  )

  app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
  });
  
  app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });
  app.get("/confessions",function(req,res){
        res.render("confessions",{confession:confession})
      }
    )
  // app.listen(400, () => console.log('listening on port: 3800'));
let port = process.env.PORT;
if(port==null||port==""){
  port = 400
}
app.listen(port);