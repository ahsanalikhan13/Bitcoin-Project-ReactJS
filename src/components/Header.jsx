import React from 'react';
import { Drawer,DrawerBody,Button,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton, useDisclosure } from '@chakra-ui/react'
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
        colorScheme={'facebook'} 
        p={'0'} 
        w={'10'} 
        h={'10'} 
        borderRadius={'full'}
        onClick={onOpen}
        >
            <BiMenuAltLeft size={'20'}/>
        </Button>

        <Drawer isOpen={isOpen}>
            <div>
                <p>Hello</p>
            </div>
        </Drawer>

    </Link>
    </>
  )
}

export default Header;