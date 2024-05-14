import React from 'react';
import {
  Grommet,
  Box,
  Header,
  Text,
  Card,
  Button,
  Avatar,
  Heading,
  Paragraph,
  Footer,
} from 'grommet';
import { Home, Previous } from 'grommet-icons';
import { hpe as theme } from 'grommet-theme-hpe';

export default function App() {
  return (
    <Grommet full theme={theme}>
      <Box align='center' justify='between' fill='vertical'>
        <Header
          align='center'
          direction='row'
          flex={false}
          justify='between'
          gap='medium'
          pad='small'
          fill='horizontal'
        >
          <Box align='center' justify='center' gap='small' direction='row'>
            <Home color='brand' size='xlarge' />
            <Box align='center' justify='center' direction='row' gap='xsmall'>
              <Text weight='bold' color='text-strong'>
                StudentXXX
              </Text>
              <Text>Portfolio</Text>
            </Box>
          </Box>
          <Box
            align='center'
            justify='center'
            height='xxsmall'
            width='xxsmall'
            round='full'
            background={{ color: 'background-contrast' }}
          >
            <Text textAlign='center'>ST</Text>
          </Box>
        </Header>
        <Card margin={{ top: 'large' }} pad='medium'>
          <Box
            align='center'
            justify='start'
            direction='row'
            margin={{ bottom: 'large' }}
          >
            <Button icon={<Previous />} primary />
          </Box>
          <Box align='center' justify='center'>
            <Avatar
              align='center'
              flex={false}
              justify='center'
              overflow='hidden'
              round='full'
              size='large'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4Qk3aU8xKsdhRJab2mycsbnaN307baTz3lRJbaSMiw&s'
            />
            <Heading level='1' margin={{ bottom: 'xsmall' }}>
              Sulaymon Tajudeen
            </Heading>
            <Text>UI/UX Front-End Engineer</Text>
            <Paragraph textAlign='center'>
              I am a UI/UX Front-End Engineer specializing in User Analytics
              Behavior and Grommet/React at Hewlett Packard Enterprise.
            </Paragraph>
            <Box
              align='center'
              justify='center'
              direction='row'
              gap='small'
              margin={{ top: 'small' }}
            >
              <Button label='Portfolio' primary />
              <Button label='Contact Me' />
            </Box>
          </Box>
        </Card>
        <Footer
          align='center'
          direction='row'
          flex={false}
          justify='between'
          margin={{ top: 'large' }}
          pad='medium'
          fill='horizontal'
        >
          <Text>© 2024 Hewlett Packard Enterprise Development LP</Text>
          <Box align='center' justify='center' direction='row' gap='small'>
            <Button label='Terms' plain />
            <Button label='Security' plain />
            <Button label='Privacy' plain />
            <Button label='Feedback' plain />
          </Box>
        </Footer>
      </Box>
    </Grommet>
  );
}
