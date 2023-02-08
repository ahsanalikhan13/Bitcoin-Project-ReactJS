import React from 'react';
import { Drawer,DrawerBody,Button,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton, useDisclosure, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi';

const Header = () => {
    const {isOpen, onOpen, onClose}= useDisclosure();

  return (
    <>
    <Link>
        <Button 
        pos={'fixed'} 
        top={'4'} 
        left={'4'} 
        colorScheme={'whatsapp'} 
        p={'0'} 
        w={'10'} 
        h={'10'} 
        borderRadius={'full'}
        onClick={onOpen}
        >
            <BiMenuAltLeft size={'20'} />
        </Button>

        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent >
                <DrawerCloseButton/>
                <DrawerHeader>VIDEO COLLECTIONS</DrawerHeader>
                
                <DrawerBody >
                    <VStack alignItems={'start'} padding={'8'} marginLeft={'-7'}>
                        <Button onClick={onClose} variant={'ghost'} colorScheme={'whatsapp'}>
                            <Link to={'/'}>Home</Link>
                        </Button>

                        <Button onClick={onClose} variant={'ghost'} colorScheme={'whatsapp'}>
                            <Link to={'/videos'}>Videos</Link>
                        </Button>

                        <Button onClick={onClose} variant={'ghost'} colorScheme={'whatsapp'}>
                            <Link to={'/videos?category=free'}>Free Videos</Link>
                        </Button>

                        <Button onClick={onClose} variant={'ghost'} colorScheme={'whatsapp'}>
                            <Link to={'/upload'}>Upload Video</Link>
                        </Button>
                    </VStack>


                    <HStack 
                    pos={'absolute'} 
                    bottom={'10'} 
                    left={'0'}
                    w={'full'}
                    justifyContent={'space-evenly'}>
                        <Button colorScheme={'whatsapp'} variant={'outline'}>
                            <Link to={'/login'}>Log In</Link>
                        </Button>

                        <Button colorScheme={'whatsapp'} variant={'outline'}>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </HStack>


                </DrawerBody>
            </DrawerContent>
        </Drawer>

    </Link>
    </>
  )
}

export default Header;