import React from 'react'
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../styles/HomeScreenStyle';
import useCats from '../hooks/useCats';
import VerticalSlider from '../components/VerticalSlider';
import CatSearch from '../components/CatSearch';
import Loader from '../components/Loader';
import useCatsFilter from '../hooks/useCatsFilter';
import NotFound from '../components/NotFound'

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { cats, isLoading } = useCats();
  const {isMatch, stateInput, setStateInput, filterCats, stateFilter } = useCatsFilter();

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <View style={styles.containerHome}>
      <View style={[{ marginTop: top + 20 }]}>
        <CatSearch placeholder='Enter the breed of cat' valueInput={stateInput} onChangeInput={setStateInput} action={() => filterCats()}  />
      </View>
      <View style={[{ marginTop: top }]}>
        {!isMatch && <NotFound title='No information found' iconName='exclamation-circle' />}

        {
          isMatch &&
          <VerticalSlider cats={cats} stateFilter={stateFilter} />
        }

      </View>
    </View>
  )
}

export default HomeScreen


