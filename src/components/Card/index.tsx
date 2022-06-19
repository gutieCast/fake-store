import React from "react";
import { IProduct } from "./interface";
import {
            // Accordion,
            // AccordionItem,
            // AccordionButton,
            // AccordionPanel,
            Box,
            Badge,
            Image,
            Text
        } from '@chakra-ui/react';
import {
        // AddIcon,
        // MinusIcon,
        StarIcon
    } from '@chakra-ui/icons'

const Card = ({ id, title, price, description, category, image, rating }: IProduct ) => {
    return (
        <Box
            as={'article'}
            border={'1px'}
            borderColor={'gray.500'}
            className="card-product"
            display={'block'}
            m={'auto'}
            id={`${id}`}
            pos={'relative'}
            w={'340px'}
            py={'20px'}
            _hover={{
                background: 'gray.200',
                borderColor: 'teal',
                transition: 'all .5s ease-in-out'
            }}
            role={'group'}
            >
                <Badge opacity={['1', '1', '0']} borderRadius='full' px='2' colorScheme={'teal'} pos={'absolute'} top={'3%'} right={'5%'} _groupHover={{opacity: '1', transition: 'all .5 ease-in-out'}} >
                    { category }
                </Badge>
            <Image
                align={'center'}
                boxSize={'borderBox'}
                loading={'lazy'}
                src={image}
                alt={title}
                mx="auto"
                maxW={'200px'}
                maxH={'250px'}
            />
            <Box
                p='6' display={'flex'}
                alignItems={'baseline'}
            >
                <Text
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    align={'center'}
                    textTransform='uppercase'
                    ml='2'
                >
                    {title}
                </Text>
            </Box>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-around'}
                mt='2'
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                >
                    {price}
                    <Box as='span' color='gray.600' fontSize='sm' ml={2}>
                        USD
                    </Box>
                </Box>
                <Box display='flex' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                        <StarIcon
                            key={i}
                            color={i < rating.rate ? 'teal.500' : 'gray.300'}
                        />
                        ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {rating.count} ratings
                    </Box>
                </Box>
            </Box>
            {/* <Accordion allowToggle allowMultiple>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                    More info
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                        ) : (
                                        <AddIcon fontSize='12px' />
                                        )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {description}
                            </AccordionPanel>

                        </>
                    )}
                </AccordionItem>
            </Accordion> */}
        </Box>
    )
}

export { Card }