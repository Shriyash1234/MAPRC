$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('.column2').toggleClass('col-9');
      $('.column2').toggleClass('col-12');
        $('#sidebar').toggleClass('active');
        $('.maincol').toggleClass('col-3');
        $('.maincol').toggleClass('maincol2');
       

    });
});

$('a.nav-link.text-white').on('click', function() {
  $('a.nav-link.active').removeClass('active')
  $('a.nav-link').addClass('text-white')
  $(this).toggleClass('active');

});
$('a.nav-link.active').on('click', function() {
  $('a.nav-link.active').removeClass('active')
  $('a.nav-link').addClass('text-white')
  $(this).toggleClass('active');

});
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
"Vagisha18110179 "	,
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
"Unnat Dave"	
];

