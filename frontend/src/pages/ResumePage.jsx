import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import html2pdf from 'html2pdf.js';
function ResumePage() {
    const {resumeId}=useParams();
    console.log(resumeId);
    const [resume,setResume]=useState()
    useEffect(()=>{
        const getResume=async()=>{
            try {
                const Response = await fetch('/api/resume/getResume', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ resumeId: resumeId }) // Send the resumeId as an object
                });
                if (Response.ok) {
                    const data = await Response.json();
                    setResume(data);
                }
            } catch (error) {
                console.log('Error in the resume Page', error.message);
            }
        }
        getResume()
    },[])
    const handleDownloadPDF = () => {
        const input = document.getElementById('pdf-content');
        const options = {
            filename: 'my-document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };
        html2pdf()
          .set(options)
          .from(input)
          .save('react-page.pdf');
      };
  return (
    <Box>
        <Flex justifyContent={'end'}>
            <Button backgroundColor={'#E72929'} _hover={{backgroundColor:'#FF204E'}} 
             onClick={handleDownloadPDF} marginRight={280}>Download PDF</Button>
        </Flex>
        <Flex justifyContent={'center'} id='pdf-content'>
        { resume &&
          resume?.template==='template1'?<Template1 name={resume?.name}
          email={resume?.email}
          linkedin={resume?.linkedin}
          phone={resume?.phone}
          state={resume?.state}
          zipcode={resume?.zipCode}
          city={resume?.city}
          job={resume?.job}
          address={resume?.address}
          experience={resume?.experience}
          education={resume?.education}
          skills={resume?.skills.map(skill => skill.skillName)}
          projects={resume?.projects}
          summary={resume?.summary}
          />:<Template2 name={resume?.name}
          email={resume?.email}
          linkedin={resume?.linkedin}
          phone={resume?.phone}
          state={resume?.state}
          zipcode={resume?.zipCode}
          city={resume?.city}
          job={resume?.job}
          address={resume?.address}
          experience={resume?.experience}
          education={resume?.education}
          skills={resume?.skills.map(skill => skill.skillName)}
          projects={resume?.projects}
          summary={resume?.summary}/>
        }
       </Flex>
    </Box>
  )
}

export default ResumePage