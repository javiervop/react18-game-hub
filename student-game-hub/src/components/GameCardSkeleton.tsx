import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton height="200px" width="100px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
