import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import userAtom from '../Atoms/userAtom'
import { SmallAddIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import Template1 from '../templates/Template1'
import Template2 from '../templates/Template2'

function UserPage() {
    const user=useRecoilValue(userAtom)
    const [resumes,setResumes]=useState()
    const navigate=useNavigate()
    useEffect(()=>{
        const fetchResumes = async () => {
            try {
                const response = await fetch('/api/resume/getResumes');
                if (response.ok) {
                    const data = await response.json();
                    console.log('Resumes', data)
                    data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));;
                    setResumes(data);
                } else {
                    throw new Error('Failed to fetch resumes');
                }
            } catch (error) {
                console.error('Error fetching resumes:', error);
                // You might want to handle errors here, such as displaying an error message
            }
        };
        fetchResumes(); // Call fetchResumes function when component mounts
    },[])
  return (
    <Box marginLeft={'30px'} marginTop={"40px"}>
        <Flex>
            <Heading textColor={'gray.600'} >My Dashboard</Heading>
        </Flex>
        <Flex marginTop={'10px'}>
            <Text fontSize={'xl'} textColor={'gray.600'} >Welcome Back, {user.displayName}! </Text>
        </Flex>
        <Box width={'1200px'} marginTop={'50px'} borderWidth={'2px'} padding={'20px'}>
            <Flex marginBottom={'4px'}>
                <Text fontSize={'lg'}>Resumes</Text>
            </Flex>
            <Box marginBottom={'20px'} width={'1150px'} borderColor={'black'} borderWidth={'.5px'} bgColor={'black'}></Box>
            <Flex>
                <Flex onClick={()=>{navigate('/templates')}} width={'200px'} justifyContent={'center'} height={'300px'} borderRadius={'8px'} borderWidth={'2px'} borderColor={'gray'}>
                    <Text marginTop={135}><SmallAddIcon/>Create New Resume</Text>
                </Flex>
                {resumes && resumes.map(resume => (
    <Flex key={resume._id} flexDirection="column" justifyContent="center" alignItems="center" margin="0 10px" width={'200px'}
    height={'300px'} borderWidth={'2px'} borderColor={'gray'} borderRadius={'8px'} overflow={'hidden'}>
        {resume.template === 'template1' ? (
            <Image width={'200px'} height={'300px'}style={{
                filter: "blur(1px)", // Adjust the blur amount as needed
                opacity: "100%"       // Adjust the opacity as needed
              }} onClick={()=>{navigate(`/${resume._id}`)}}
            src='https://res.cloudinary.com/dyylkrsak/image/upload/v1714379272/Screenshot_2024-04-27_200630_l0enaf.png' />
        ) : resume.template === 'template2' ? (
            <Image width={'200px'} height={'300px'}   style={{
                filter: "blur(1px)", // Adjust the blur amount as needed
                opacity: "100%"       // Adjust the opacity as needed
              }}
              onClick={()=>{navigate(`/${resume._id}`)}}
            src='https://res.cloudinary.com/dyylkrsak/image/upload/v1714379300/getPdfThumbnail_agsgoz.jpg' />
            
        ) : null}
    </Flex>
))}
            </Flex>
        </Box>
    </Box>
  )
}

export default UserPage