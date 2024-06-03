import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import userAtom from '../Atoms/userAtom'
import { SmallAddIcon } from '@chakra-ui/icons'
import { MdEmail, MdSend } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import useShowToast from '../hooks/useShowToast'
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons'
function UserPage() {
    const user=useRecoilValue(userAtom)
    const [resumes,setResumes]=useState()
    const navigate=useNavigate()
    const showToast=useShowToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
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
    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    const handleSend = (e) => {
        e.preventDefault();
        if(!data.name || !data.email || !data.subject || !data.message){
          showToast("error","All Fields are mandatory" ,"error");
          return ;
        }
        const templateParams = {
          from_name: data.name,
          to_name: "jayesh",
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        };
        const form = document.createElement("form");
        form.style.display = "none";
    
        for (const key in templateParams) {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = templateParams[key];
          form.appendChild(input);
        }
    
        document.body.appendChild(form);
        emailjs
          .sendForm('service_tkdktbl', 'template_s4akw3l', form, 'CXS2Wzk0pkHsaU4XR')
          .then((response) => {
             setData({name:"",email:"",subject:"",message:"" }); // Reset form data to empty strings
            console.log('Email sent successfully:', response);
            showToast("Success","Email Sent Succesfully","success")
          })
          .catch((error) => {
            showToast("error","Unable To Send Email","error")
            console.error('Email failed to send:', error);
            return ;
          });
          
      };
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
    <Box position="fixed" bottom="20px" right="20px" >
        <Button onClick={onOpen} borderWidth={2} borderColor={'gray.300'} borderRadius={'32px'} shadow={'initial'}>
            <FontAwesomeIcon size='xl'icon={faMessage} />
        </Button>
    </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >Get in Touch!</ModalHeader>
          <ModalCloseButton />
          <Box paddingLeft={15} paddingRight={15}>
            <Text fontSize={'sm'}>
                    Want to find out more about Resume Builder? Get it touch with us by filling up this form.
            </Text>
            <Flex>
              <FormControl isRequired mb={4} borderColor={"darkgray"}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Name"
                  borderColor={"black"}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  _hover={{borderColor:'gray.900'}}
                  value={user.displayName}
                />
              </FormControl>
              <FormControl isRequired mb={4} marginLeft={"10px"} borderColor={"darkgray"}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  borderColor={"black"}
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={user.email}
                  _hover={{borderColor:'gray.900'}}
                />
              </FormControl>
            </Flex>
            <FormControl isRequired mb={4} borderColor={"darkgray"}>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                borderColor={"black"}
                _hover={{borderColor:'gray.900'}}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
                value={data.subject}
              />
            </FormControl>
            <FormControl isRequired mb={4} borderColor={"darkgray"}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Message"
                borderColor={"black"}
                rows={5}
                _hover={{borderColor:'gray.900'}}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                value={data.message}
              />
            </FormControl>
            
          </Box>

          <ModalFooter>
            <Button backgroundColor={'#008DDA'} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" rightIcon={<MdSend />} 
            _hover={{bg:'#41C9E2'}} onClick={handleSend} backgroundColor={'#008DDA'}>
              Send Message
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default UserPage