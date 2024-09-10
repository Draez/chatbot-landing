import { Box, Heading, SimpleGrid, Text, VStack } from 'magic-ui'

const features = [
    {
        title: 'Website Scraping',
        description: 'Automatically gather content from your website to train the chatbot.',
    },
    {
        title: 'Smart Responses',
        description: 'Leverage ChatGPT to provide intelligent and context-aware answers.',
    },
    {
        title: 'Custom Integration',
        description: 'Seamlessly integrate the chatbot into your existing website.',
    },
]

export default function Features() {
    return (
        <Box py={16}>
            <Heading as="h2" size="xl" textAlign="center" mb={8}>
                Our Features
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {features.map((feature, index) => (
                    <VStack key={index} align="start" p={6} borderWidth={1} borderRadius="md">
                        <Heading as="h3" size="lg">
                            {feature.title}
                        </Heading>
                        <Text>{feature.description}</Text>
                    </VStack>
                ))}
            </SimpleGrid>
        </Box>
    )
}