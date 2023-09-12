import { Card, Metric, Text, Flex, BadgeDelta } from "@tremor/react"
const CardSales = () => {
  return (
      <Card className="mx-auto" decoration="top" decorationColor="sky">
                <Flex>
                  <Text>Sales</Text>
                  <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
                    +12.3%
                  </BadgeDelta>
                </Flex>
                <Metric>$ 34,743</Metric>
              </Card>
  )
}

export default CardSales
