import React, { FC } from "react";
import { IProduct } from "./interface";
import {
        Accordion,
        AccordionItem,
        AccordionButton,
        AccordionPanel,
        Badge,
        Box,
        Button,
        Heading,
        Image,
        Text,
        VStack
    } from '@chakra-ui/react';
import {
        AddIcon,
        MinusIcon,
        StarIcon
    } from '@chakra-ui/icons'

const Card: FC <IProduct> = ({ id, title, price, description, category, image, rating }) => {
    return (
        // Card
        <Box
            as={'article'}
            border={'3px'}
            borderColor={'transparent'}
            boxShadow={'0 3px 3px #4cbdbd'}
            className="card-product"
            display={'block'}
            m={'auto'}
            id={`${id}`}
            pos={'relative'}
            w={'340px'}
            p={'30px'}
            _hover={{
                border: '3px',
                borderColor: 'teal',
                transition: 'all .5s ease-in-out'
            }}
            role={'group'}
            >
            <Box className="card-body">
                {/* Category */}
                <Badge
                    opacity={['1', '1', '0']}
                    borderRadius='full' px='2'
                    colorScheme={'teal'}
                    pos={'absolute'}
                    top={'3%'}
                    right={'5%'}
                    _groupHover={{opacity: '1', transition: 'all .5 ease-in-out'}}
                >
                    { category }
                </Badge>
                {/* Image */}
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
                {/* Title */}
                <Heading
                    as={'h3'}
                    className={'card-title'}
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='s'
                    textAlign={'center'}
                    textTransform='uppercase'
                    mt={'2'}
                    p={'6'}
                >
                    {title}
                </Heading>
                {/* Info */}
                <VStack
                    className="card-info"
                    mb={'20px'}
                >
                    {/* Price */}
                    <Box
                        className="price-box"
                        display={'flex'}
                        alignItems={'center'}
                        fontWeight={'extrabold'}
                    >
                        <Text fontSize={'3xl'} >
                            {price}
                        </Text>
                        <Box as='span' color='gray.600' fontSize='large' ml={2}>
                            USD
                        </Box>
                    </Box>
                    {/* Rating */}
                    <Box  className="rating-box" display='flex' alignItems='center' mt={'20px'}>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < Math.round(rating.rate)  ? 'teal.500' : 'gray.300'}
                            />
                            ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            {rating.rate} of
                        </Box>    
                        <Box as='span' ml='1' color='gray.600' fontSize='sm'>
                            {rating.count} ratings
                        </Box>
                    </Box>
                    {/* Description */}
                    <Accordion
                        className="description-accordion"
                        my={'10px'}
                        allowToggle
                        allowMultiple
                        borderColor={'transparent'}
                    >
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>                               
                                    <AccordionButton _hover={{backgroundColor: 'transparent'}} _focus={{border: 'none', }}>
                                        <Box flex='1' textAlign='center' border={'none'} >
                                            {isExpanded ? (
                                                "Hide description"
                                                ) : (
                                                "Show description"
                                                )}
                                        </Box>
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        {description}
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>
                </VStack>
            </Box>
            <Box
                as="footer"
                className="card-footer"
                w={'100%'}   
            >
                {/* Add to Cart */}
                <Button
                    colorScheme={'teal'}
                    w='100%'
                    // onClick={}
                >
                    Add to Cart
                </Button>

            </Box>
        </Box>
    )
}

export { Card }