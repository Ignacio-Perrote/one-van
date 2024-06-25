import { Box, Badge, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import React from "react";
import { AutoCardsButton } from "./card-button";

interface CardProps {
  imageUrl: string;
  imageAlt: string;
  beds: number;
  baths: number;
  title: string;
  formattedPrice: string;
  reviewCount: number;
  rating: number;
}

export const HotelCard = ({
  imageUrl,
  imageAlt,
  beds,
  baths,
  formattedPrice,
  rating,
  reviewCount,
  title,
}: CardProps) => {
  return (
    <Box className="card" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt={imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {beds} beds &bull; {baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>

        <Box>
          {formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, stars) => (
              <StarIcon
                key={`star-${stars + 1}`}
                color={stars < rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {reviewCount} reviews
          </Box>
        </Box>
       
      </Box>
      <AutoCardsButton
        className="card-button"
        dataName={"hola"}
        buttonText={"Reservar"}
        buttonTo={""}
      />
    </Box>
  );
};
