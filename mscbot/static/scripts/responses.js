function getBotResponse(input) {
    var response = '';
        // Simple responses
        if (input.toLowerCase().includes('hello')) {
            response='Hello there!';
        } else if (input.toLowerCase().includes('bye')) {
            response='Talk to you later!';
        }
        //else if(input.toLowerCase().includes('exam')){
          //response='Important Dates<ul><li>IITM to take admission through IAT for BS -12 May 2023</li><li>NEST Exam Application Portal opens- 1 April 2023</li><li>The IAT exam is scheduled on June 17 2023, and the registrations would start from 15 April 2023</li><li>NEST Examination 24 June 2023</li></ul>';
        //}
        else if (input.toLowerCase().includes('date')) {
          response = 'Important Dates\n'
          response += '<br>'
          response += '<br>1. IITM to take admission through IAT for BS - 12 May 2023<br>'
          response += '<br>2. NEST Exam Application Portal opens - 1 April 2023<br>'
          response += '<br>3. The IAT exam is scheduled on - 17 June 2023, and the registrations would start from - 15 April 2023<br>'
          response += '<br>4. NEST Examination - 24 June 2023'
        }
        
      // Check user input and generate appropriate response
      else if (input.toLowerCase().includes('home')) {
        response = '<a href="https://www.sciastra.com">Home Page</a>';
      } else if (input.toLowerCase().includes('team')) {
        response = '<a href="https://www.sciastra.com/teams/">Teams</a>';
      } else if (input.toLowerCase().includes('selections')) {
        response = '<a href="https://www.sciastra.com/selections/">Selections</a>';
      } else if (input.toLowerCase().includes('contact')) {
        response = '<a href="https://www.sciastra.com/contact/">Contact Us</a>';
      } else if (input.toLowerCase().includes('blog')) {
        response = '<a href="https://www.sciastra.com/blog/">Blogs</a>';
      }else if (input.toLowerCase()=="course" || input.toLowerCase()=="courses" ) {
        //response = 'Courses : <a href ="https://www.sciastra.com/courses/">Courses</a>';
        response='Select the course category-<br><br>Crash Courses 2023<br>IISERS<br>NISER<br>CEBS<br>ISI<br>CMI<br>IACS';
      }else if (input.toLowerCase().includes('crash')) {
        response='We have-<br><br><a href="https://voaaf.courses.store/324949?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">NEST 2023 Complete Crash Course</a><br><a href="https://voaaf.courses.store/325293?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">IAT Rescue Course</a><br><a href="https://voaaf.courses.store/324951?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">NEST Rescue Course</a><br><a href="https://voaaf.courses.store/325308?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">IAT & NEST Complete Crash Course</a><br><a href="https://voaaf.courses.store/325304?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">IAT & NEST Rescue Course</a><br><a href="https://voaaf.courses.store/324950?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">IAT 2023 Complete Crash Course</a>';
      }else if(input.toLowerCase().includes('iisers')){
        response='We have-<br><br><a href="https://voaaf.courses.store/214131?utm_source%3Dother%26utm_medium%3Dstudent-course-referral%26utm_campaign%3Dcourse-overview-webapp">SciAstra 1.0 (2024)</a><br><a href="https://voaaf.courses.store/214129?utm_source%3Dother%26utm_medium%3Dstudent-course-referral%26utm_campaign%3Dcourse-overview-webapp">Spartan 2.0 (2023)</a><br><a href="http://on-app.in/app/oc/267822/voaaf">SciAstra Masterclass</a><br><a href="https://voaaf.courses.store/341549?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">Vikram Batch 2024</a>';
      }else if(input.toLowerCase().includes('niser')){
        response='We have-<br><br><a href="https://voaaf.courses.store/214131?utm_source%3Dother%26utm_medium%3Dstudent-course-referral%26utm_campaign%3Dcourse-overview-webapp">SciAstra 1.0 (2024)</a><br><a href="https://voaaf.courses.store/214129?utm_source%3Dother%26utm_medium%3Dstudent-course-referral%26utm_campaign%3Dcourse-overview-webapp">Spartan 2.0 (2023)</a><br><a href="http://on-app.in/app/oc/267822/voaaf">SciAstra Masterclass</a><br><a href="https://voaaf.courses.store/341549?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">Vikram Batch 2024</a>';
      }else if(input.toLowerCase().includes('cebs')){
        response='We have-<br><br><a href="https://voaaf.courses.store/214131?utm_source%3Dother%26utm_medium%3Dstudent-course-referral%26utm_campaign%3Dcourse-overview-webapp">SciAstra 1.0 (2024)</a><br><a href="https://voaaf.courses.store/214129?utm_source%3Dother%26utm_medium%3Dstudent-course-referral%26utm_campaign%3Dcourse-overview-webapp">Spartan 2.0 (2023)</a><br><a href="http://on-app.in/app/oc/267822/voaaf">SciAstra Masterclass</a>';
      }else if(input.toLowerCase().includes('isi')){
        response='We have-<br><br><a href="https://voaaf.courses.store/224378?utm_source%3Dother%26utm_medium%3Dstudent-course-referral%26utm_campaign%3Dcourse-overview-webapp">ISI + Full Year</a><br><a href="https://voaaf.courses.store/320147?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">ISI & CMI Full Crash Course</a><br><a href="https://voaaf.courses.store/324949?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">NEST 2023 Complete Crash Course</a><br><a href="https://voaaf.courses.store/325293?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">IAT Rescue Course</a><br><a href="https://voaaf.courses.store/324951?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">NEST Rescue Course</a><br><a href="https://voaaf.courses.store/325308?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">IAT & NEST Complete Crash Course</a><br><a href="https://voaaf.courses.store/325304?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">IAT & NEST Rescue Course</a><br><a href="https://voaaf.courses.store/324950?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">IAT 2023 Complete Crash Course</a>';
      }else if(input.toLowerCase().includes('cmi')){
        response='We have-<br><br><a href="https://voaaf.courses.store/224378?utm_source%3Dother%26utm_medium%3Dstudent-course-referral%26utm_campaign%3Dcourse-overview-webapp">ISI+ CMI Full Year Course 2023</a><br><a href="https://voaaf.courses.store/320147?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">ISI & CMI Full Crash Course</a>';
      }else if(input.toLowerCase().includes('iacs')){
        response='We have-<br><br><a href="https://voaaf.courses.store/214131?utm_source%3Dother%26utm_medium%3Dstudent-course-referral%26utm_campaign%3Dcourse-overview-webapp">SciAstra 1.0 (2024)</a>';
      }else if (input.toLowerCase().includes('study')) {
        response = '<a href ="https://www.sciastra.com/materials/">Study Materials</a>';
      }else {
        response = "I'm sorry, I couldn't understand your request. How can I assist you further?";
      }
      return response;
}