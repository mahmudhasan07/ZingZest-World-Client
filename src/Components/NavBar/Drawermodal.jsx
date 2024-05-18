import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Drawerbody from './Drawerbody';
import { NavLink } from 'react-router-dom';

const Drawermodal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
    return (
        <div>
            <Button ref={btnRef} colorScheme='transparent' textColor={'black'} fontSize={'larger'}  onClick={onOpen}>
            <AiOutlineMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader >
           <NavLink to={'/'}> <h1 className='text-3xl italic font-bold'>ZingZest World</h1></NavLink>
          </DrawerHeader>

          <DrawerBody>
            <div className='my-5'>
            <Input placeholder='Type here...' />
            </div>
            <Drawerbody></Drawerbody>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
        </div>
    );
};

export default Drawermodal;