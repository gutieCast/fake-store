import React, { FC } from "react";
import { VStack, Box, Heading, Text } from '@chakra-ui/react'

const Header: FC = () => {

    return (
        <VStack
            as={'header'}
            bg={'teal'}
            color={'floralwhite'}
            p={'20px 30px'}
        >
            <Box>

            </Box>
            <Heading
                fontFamily={'Lobster'}
                fontSize={'4em'}
                maxW={'100%'}
            >
                The fake store
            </Heading>
            <Text align={'center'} fontSize={'2em'} lineHeight={'.9'} color={'teal.100'} >
                a user interface for an e-commerce
            </Text>
        </VStack>

    )
}

export { Header }