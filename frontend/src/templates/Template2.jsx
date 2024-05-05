import React from 'react';
import { Flex, Box, Heading, VStack, Text, HStack } from '@chakra-ui/react';

function Template2({ name, job, phone, address, city, state, zipcode, email, linkedin, experience, education,skills,
  projects,summary }) {
 console.log(experience);
  return (
    <Flex alignItems="center" justifyContent="center" marginTop={'20px'} >
    <VStack width="700px" overflow={'hidden'}>
      <HStack bgColor={'#FFF2E1'} padding={'20px'} width={'700px'} borderRadius={'8px'} justifyContent={'space-evenly'}>
          <VStack padding="8px" align="end" justifyContent={'space-evenly'} marginLeft="10px" >
            <VStack>
            <Heading size="lg" textColor={'#F7418F'}>
              {name ? name : 'Alex Carry'}
            </Heading>
            <Text fontSize={'md'} textColor={'gray.400'}>{job ? job : 'Human Resource Manager'}</Text>
            </VStack>
            <Text fontSize={'0.7em'} marginTop={'5px'} textAlign={'end'}>
              {address ? address : 'Tdi lake Grove'}</Text>
              <Text fontSize={'0.7em'}>{city ? city : 'Sonipat'},
              {state ? state : 'haryana'},{zipcode ? zipcode : '123001'} 
            </Text>
            <Text fontSize={'0.7em'}>{phone ? phone : '7056156463'}</Text>
            <Text fontSize={'0.7em'}>
              {email ? email : 'yjayesh60@gmail.com'} </Text>
            <Text fontSize={'0.7em'}> {linkedin ? linkedin : 'https://github.com/jayeshyadav31'}
            </Text>
          </VStack>
        <Flex alignContent={'flex-start'} alignSelf={'baseline'} width={'335px'}>
        {summary?<Text marginLeft={'20px'} dangerouslySetInnerHTML={{ __html: summary }} maxW={300}></Text>:<Text marginLeft={'20px'}>
          Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.</Text>}
          </Flex>     
          </HStack>
      {/*Experience Schema*/}
      <Box textAlign={'start'} marginLeft={'10px'}>
        <Box marginTop="10px" height="2px" width="700px" backgroundColor="#F7418F" />
        <Heading size="md" textColor={'#F7418F'} marginTop={'4px'}>Professional Experience</Heading>
        <VStack>
          {experience
            ? experience.map((exp, index) => (
                <Box key={index} padding="8px" marginTop="10px" marginLeft="10px" width={'700px'}>
                  <Flex justifyContent="space-between">
                    <Box>
                      <Heading fontSize="sm">
                        {exp.company?exp.company:''}{exp.location&&exp.company?','+exp.location:exp.location}
                      </Heading>
                      <Heading fontSize="sm">{exp.title}</Heading>
                    </Box>
                    <Box marginRight={'10px'}>
                      <Text fontSize={'sm'}>{exp.startDate}  {exp && exp.endDate ? '- '+ exp.endDate:exp.startDate?"Present":''}</Text>
                    </Box>
                  </Flex>
                  <VStack align="start" marginTop="10px">
                  <Text fontSize="md" maxW={'650px'} dangerouslySetInnerHTML={{ __html: exp.workSummary }} />
                  </VStack>
                </Box>
              ))
            : (
              <Box padding="8px" marginTop="10px" marginLeft="10px">
                <Flex justifyContent="space-between">
                  <Box>
                    <Heading fontSize="sm">Jim's Widget Factory, Plano, TX</Heading>
                    <Heading fontSize="sm">Human Resources Manager</Heading>
                  </Box>  
                  <Text>January 2016 - Present</Text>
                </Flex>
                <Box>
                  <Flex align="start" marginTop="10px" maxWidth="880px">
                    <Box bg="orange" width="6px" height="6px" borderRadius="full"  marginTop={2} marginRight="4px"/>
                    <Text>Implement effective company policies to ensure that all practices comply with labor and employment regulations</Text>
                  </Flex>
                  <Flex align="start" marginTop="10px" maxWidth="880px">
                    <Box bg="orange" width="8px" height="6px" borderRadius="full"  marginTop={2} marginRight="4px"/>
                    <Text>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by 
                    creating and maintaining a positive work environment
                    </Text>
                  </Flex>
                  <Flex align="start" marginTop="10px" maxWidth="880px">
                    <Box bg="orange" width="6px" height="6px" borderRadius="full"  marginTop={2} marginRight="4px"/>
                    <Text>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies
                    </Text>
                  </Flex>
                </Box>
              </Box>
            )}
        </VStack>
      </Box>
      {/*Education Schema */}
      <Box textAlign={'start'} marginLeft={'10px'} marginTop={'4px'} >
        <Box marginTop="10px" height="2px" width="700px" backgroundColor="#F7418F" />
        <Heading size="md" textColor={'#F7418F'} marginTop={'2px'}>Education</Heading>
        <VStack>
          {education
            ? education.map((edu, index) => (
                <Box key={index} padding="8px" marginTop="10px" marginLeft="10px" width={'700px'}>
                  <Flex justifyContent="space-between">
                    <Box textAlign={'start'} >
                      <Heading fontSize="sm">{edu.school?edu.school+' ,':''} {edu.location}</Heading>
                      <Heading fontSize="sm">{edu.degree?edu.degree+' in ':""}{edu.fieldOfStudy}</Heading>
                    </Box>
                    <Box marginRight={'10px'}>
                      <Text fontSize={'sm'}>{edu.startDate}  {edu && edu.endDate ? '- '+ edu.endDate:edu.startDate?"Present":''}</Text>
                    </Box>
                  </Flex>
                  <Text marginTop={'10px'} fontSize="md" maxW={'650px'} dangerouslySetInnerHTML={{ __html:edu.description  }} ></Text>
                </Box>
              ))
            : (
              <Box padding="8px" marginTop="10px" marginLeft="10px">
                <Flex justifyContent="space-between">
                  <Box>
                    <Heading size="sm">University of XYZ, City, State</Heading>
                    <Heading size="sm">Bachelor of Science in Engineering</Heading>
                  </Box>  
                  <Text>August 2012 - May 2016</Text>
                </Flex>
                <Flex align="start" marginTop="10px" maxWidth="880px">
                    <Box bg="orange" width="8px" height="6px" borderRadius="full"  marginTop={2} marginRight="4px"/>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                </Flex>
              </Box>
            )}
        </VStack>
      </Box>

      {/*Skills section*/ }
      <Box textAlign={'start'} marginLeft={'10px'} marginTop={'4px'}>
        <Box marginTop="10px" height="2px" width="700px" backgroundColor="#F7418F" />
        <Heading size="md" textColor={'#F7418F'} marginTop={'2px'} marginLeft={3}>Skills</Heading>
        <VStack justifyContent={'start'}>
          {skills
            ? skills.map((skill, index) => (
              <Flex key={index}  marginLeft="32px" width={'700px'}>
              {/* {skill &&   */}
               {/* <Box marginTop={2.5} marginBottom={2.5} marginRight={'2px'} width={'3px'} height={'3px'} borderRadius={'full'} bgColor={'black'}/> } */}
              <ul><li><Text>{skill}</Text></li></ul>
            </Flex>
              ))
            : (
              <Flex padding="8px" marginTop="10px" marginRight={'600px'} justifyContent={'start'}>
                <Text>No skills provided</Text>
              </Flex>
            )}
        </VStack>
      </Box>
       {/* Projects Section */}
       <Box textAlign={'start'} marginLeft={'10px'} marginTop={'4px'}>
        <Box marginTop="10px" height="2px" width="700px" backgroundColor="#F7418F" />
        <Heading size="md" textColor={'#F7418F'} marginTop={'2px'}>Projects</Heading>
        <VStack justifyContent={'start'} marginBottom={'15px'}>
          {projects
            ? projects.map((project, index) => (
                <Box key={index} padding="8px" marginTop="10px" marginLeft="10px" w={700}>
                  <Heading size="sm">{project.projectName}</Heading>
                  <Text fontSize="md" marginLeft={'4px'} maxW={'650px'} 
                  dangerouslySetInnerHTML={{ __html: project.description }} />
                </Box>
              ))
            : (
              <Flex padding="8px" marginTop="10px" marginRight="540px" justifyContent={'start'}>
                <Text>No projects provided</Text>
              </Flex>
            )}
        </VStack>
      </Box>
    </VStack>
  </Flex>
  )
}

export default Template2