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
  Pressable
} from 'native-base';
import {Dimensions} from 'react-native';
import {ImageBackground, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const width = Dimensions.get('window').width;
const FirstRoute = () => (
  <View display="flex" m={4} style={{flex: 1}}>
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
          <Text fontSize={12} fontWeight="medium" color='#fff'>
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
          <Text fontSize={12} fontWeight="medium" color='#fff'>
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
          <Text fontSize={12} fontWeight="medium" color='#fff'>
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
          <Text fontSize={12} fontWeight="medium" color='#fff'>
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
          <Text fontSize={12} fontWeight="medium" color='#fff'>
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
          <Text fontSize={12} fontWeight="medium" color='#fff'>
            Title
          </Text>
        </Flex>
      </Flex>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View m={4} style={{flex: 1}}>
    <ScrollView nestedScrollEnabled={true}>
      <Flex>
        <Text fontSize={16} fontWeight="bold" color="#fff">
          About the movie
        </Text>
        <Row my={4}>
          <Row>
            <Icon2 name="dot-single" color="#BC002D" size={25} />
            <Text color="#fff">Action</Text>
          </Row>
          <Row>
            <Icon2 name="dot-single" color="#BC002D" size={25} />
            <Text color="#fff">Scifi</Text>
          </Row>
        </Row>
        <Text fontSize={12} color="#fff">
          When Thor’s evil brother, Loki (Tom Hiddleston), gains access to the
          unlimited power of the energy cube called the Tesseract, Nick Fury
          (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero
          recruitment effort to defeat the unprecedented threat to Earth.
          Joining Fury’s “dream team” are Iron Man (Robert Downey Jr.), Captain
          America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris
          Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy
          Renner).
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
            <Text fontWeight="semibold" color="#7892AA" ml={2}>
              Subtitles:
            </Text>
          </Row>
          <Text fontWeight="bold" color="#fff">
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
            <Text fontWeight="semibold" color="#7892AA" ml={2}>
              Audio:
            </Text>
          </Row>
          <Row>
            <Text fontWeight="bold" color="#fff">
              Arabic,
            </Text>
            <Text fontWeight="bold" color="#fff">
              English
            </Text>
          </Row>
        </Column>
      </Flex>
    </ScrollView>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Details = ({navigation}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Similar Movies'},
    {key: 'second', title: 'More Details'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#BC002D'}}
      style={{
        backgroundColor: '#151F28',
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F122',
      }}
      labelStyle={{fontWeight: 'bold'}}
    />
  );
  return (
    <Flex safeArea flex={1} bg="#151F28">
      <ScrollView>
        <Flex>
          <ImageBackground
            resizeMode="cover"
            source={require('../../../assets/image10.png')}>
            <Flex h={250}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#151F28', '#00000000', '#151F28']}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                }}>
                <Flex m={4} alignItems="flex-end" flex={1}>
                  <Pressable
                  onPress={()=>navigation.goBack()}
                  
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
                    Gintama 2
                  </Text>
                </Flex>
              </LinearGradient>
            </Flex>
          </ImageBackground>
          <Flex p={4}>
            <Button borderRadius={16} mt={4} h={50} backgroundColor="#BC082D">
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
                  1:05:44
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
            <Text fontSize={12} color="#fff">
              When Thor’s evil brother, Loki (Tom Hiddleston), gains access to
              the unlimited power of the energy cube called the Tesseract, Nick
              Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a
              superhero recruitment effort to defeat the unprecedented threat to
              Earth. Joining Fury’s “dream team” are Iron Man (Robert Downey
              Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor
              (Chris Hemsworth), the Black Widow (Scarlett Johansson) and
              Hawkeye (Jeremy Renner).
            </Text>
          </Flex>
        </Flex>
        <Flex minH={500}>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default Details;
