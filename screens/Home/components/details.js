import React from 'react';
import {
  Text,
  Flex,
  ScrollView,
  Button,
  Row,
  Column,
  Center,
  View,
  Image,
  Pressable,
  Box,
} from 'native-base';
import { Dimensions } from 'react-native';
import { ImageBackground, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation, useRoute } from "@react-navigation/native"
const width = Dimensions.get('window').width;
const FirstRoute = () => (
  <View display="flex" m={4} style={{ flex: 1 }}>
    <ScrollView nestedScrollEnabled={true} flex={1}>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        <Flex w={width / 3.5} my={2}>
          <Image
            w="100%"
            h={150}
            borderRadius={16}
            source={require('../../../assets/image11.png')}
            alt="movie"
          />
          <Text fontSize={12} fontWeight="medium" color="#fff">
            Attack of titans
          </Text>
        </Flex>
        <Flex w={width / 3.5} my={2}>
          <Image
            w="100%"
            h={150}
            borderRadius={16}
            source={require('../../../assets/image5.png')}
            alt="movie"
          />
          <Text fontSize={12} fontWeight="medium" color="#fff">
            Mirai of the Future
          </Text>
        </Flex>
        <Flex w={width / 3.5} my={2}>
          <Image
            h={150}
            borderRadius={16}
            w="100%"
            source={require('../../../assets/image8.png')}
            alt="movie"
          />
          <Text fontSize={12} fontWeight="medium" color="#fff">
            Doraemon the Mo..
          </Text>
        </Flex>
        <Flex w={width / 3.5} my={2}>
          <Image
            w="100%"
            h={150}
            borderRadius={16}
            source={require('../../../assets/image6.png')}
            alt="movie"
          />
          <Text fontSize={12} fontWeight="medium" color="#fff">
            Title
          </Text>
        </Flex>
        <Flex w={width / 3.5} my={2}>
          <Image
            w="100%"
            h={150}
            borderRadius={16}
            source={require('../../../assets/image9.png')}
            alt="movie"
          />
          <Text fontSize={12} fontWeight="medium" color="#fff">
            Title
          </Text>
        </Flex>
        <Flex w={width / 3.5} my={2}>
          <Image
            w="100%"
            h={150}
            borderRadius={16}
            source={require('../../../assets/image4.png')}
            alt="movie"
          />
          <Text fontSize={12} fontWeight="medium" color="#fff">
            Title
          </Text>
        </Flex>
      </Flex>
    </ScrollView>
  </View>
);

const SecondRoute = () => {
  const route = useRoute()
  const { movies } = route.params

  return (
    <View m={4} style={{ flex: 1 }}>
      <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
        <Flex>
          <Text fontSize={16} fontFamily="Montserrat-Bold" color="#fff">
            About the movie
          </Text>
          <Row my={4}>
            {movies._data.tags.slice(0, 3).map((val, index) => {
              return (
                <Row key={index}>
                  <Icon2 name="dot-single" color="#BC002D" size={25} />
                  <Text color="#fff" fontFamily="Montserrat-Regular">
                    {val}
                  </Text>
                </Row>
              )
            })}

          </Row>
          <Text fontSize={12} color="#fff" fontFamily="Montserrat-Regular">
            {movies?._data?.desc}
          </Text>
          <Column my={2}>
            <Row>
              <Text
                borderWidth={1}
                borderColor="#707070"
                borderRadius={3}
                color="#707070"
                px={1}
                fontWeight="bold">
                CC
              </Text>
              <Text fontFamily="Montserrat-SemiBold" color="#7892AA" ml={2}>
                Subtitles:
              </Text>
            </Row>
            <Text fontFamily="Montserrat-Bold" color="#fff">
              Arabic
            </Text>
          </Column>
          <Column my={2}>
            <Row>
              <Text
                borderWidth={1}
                borderColor="#707070"
                borderRadius={3}
                color="#707070"
                px={1}
                fontWeight="bold">
                AD
              </Text>
              <Text fontFamily="Montserrat-SemiBold" color="#7892AA" ml={2}>
                Audio:
              </Text>
            </Row>
            <Row>
              <Text fontFamily="Montserrat-Bold" color="#fff">
                Arabic,
              </Text>
              <Text fontFamily="Montserrat-Bold" color="#fff">
                English
              </Text>
            </Row>
          </Column>
          <Column>
            <Text fontFamily="Montserrat-SemiBold" color="#7892AA">
              Cast:
            </Text>

            <Row flexWrap="wrap">
              <Box h={12} bg="#373F47" rounded={77} justifyContent="center" m={1}>
                <Row alignItems="center" px={2}>
                  <Image
                    mx={1}
                    size={35}
                    rounded={50}
                    source={require('../../../assets/avatar1.png')}
                    alt="cast"
                  />
                  <Text color="#fff" fontFamily="Montserrat-Regular">
                    Sophia Watson
                  </Text>
                </Row>
              </Box>
              <Box h={12} bg="#373F47" rounded={77} justifyContent="center" m={1}>
                <Row alignItems="center" px={2}>
                  <Image
                    mx={1}
                    size={35}
                    rounded={50}
                    source={require('../../../assets/avatar2.png')}
                    alt="cast"
                  />
                  <Text color="#fff" fontFamily="Montserrat-Regular">
                    John Doe
                  </Text>
                </Row>
              </Box>
              <Box h={12} bg="#373F47" rounded={77} justifyContent="center" m={1}>
                <Row alignItems="center" px={2}>
                  <Image
                    mx={1}
                    size={35}
                    rounded={50}
                    source={require('../../../assets/avatar1.png')}
                    alt="cast"
                  />
                  <Text color="#fff" fontFamily="Montserrat-Regular">
                    Jane Clarkson
                  </Text>
                </Row>
              </Box>
            </Row>
          </Column>
        </Flex>
      </ScrollView>
    </View>
  )
}



const Details = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { movies } = route.params
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Similar Movies' },
    { key: 'second', title: 'More Details' },
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}

      indicatorStyle={{ backgroundColor: '#BC002D' }}
      style={{
        backgroundColor: '#151F28',
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F122',
      }}
      labelStyle={{ fontWeight: 'bold' }}
    />
  );
  const toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10)
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours, minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v, i) => v !== "00" || i > 0)
      .join(":")
  }
  return (
    <Flex safeArea flex={1} bg="#151F28">
      <ScrollView>
        <Flex>
          <ImageBackground
            resizeMode="cover"
            source={{ uri: movies?._data?.image[0] }}>
            <Flex h={250}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#151F28', '#00000000', '#151F28']}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                }}>
                <Flex m={4} alignItems="flex-end" flex={1}>
                  <Pressable
                    onPress={() => navigation.goBack()}
                    w={10}
                    h={10}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    borderRadius={10}
                    borderWidth={1}
                    borderColor="#F1F1F1">
                    <Icon name="times" size={20} color="#F1F1F1" />
                  </Pressable>
                </Flex>
                <Flex m={4} flex={2} justifyContent="flex-end">
                  <Text fontSize={28} color="#fff" fontWeight="bold">
                    {movies?._data?.title}
                  </Text>
                </Flex>
              </LinearGradient>
            </Flex>
          </ImageBackground>
          <Flex p={4}>
            <Button onPress={() => {
              navigation.navigate("Video", { url: movies?._data?.mov_type?.url1360 })
            }} borderRadius={16} mt={4} h={50} backgroundColor="#BC082D">
              <Row>
                <Icon1 size={27} color="#fff" name="play-circle" />
                <Text ml={2} fontSize={16} fontWeight="bold" color="#fff">
                  Play Now
                </Text>
              </Row>
            </Button>
            <Row alignItems="center" justifyContent="space-between" my={4}>
              <Column>
                <Text fontSize={12} fontWeight="bold" color="#fff">
                  {toHHMMSS(movies?._data?.duration)}
                </Text>
              </Column>
              <Row>
                <Column mx={2}>
                  <Center>
                    <Icon name="download" size={16} color="#fff" />
                    <Text fontSize={10} color="#fff" fontWeight="semibold">
                      Download
                    </Text>
                  </Center>
                </Column>
                <Column mx={2}>
                  <Center>
                    <Icon name="plus" size={16} color="#fff" />
                    <Text fontSize={10} color="#fff" fontWeight="semibold">
                      My List
                    </Text>
                  </Center>
                </Column>
                <Column mx={2}>
                  <Center>
                    <Icon name="share-alt" size={16} color="#fff" />
                    <Text fontSize={10} color="#fff" fontWeight="semibold">
                      Share
                    </Text>
                  </Center>
                </Column>
              </Row>
            </Row>
            <Text fontSize={12} color="#fff" fontFamily="Montserrat-Regular">
              {movies?._data.desc}
            </Text>
          </Flex>
        </Flex>
        <Flex minH={500}>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default Details;
