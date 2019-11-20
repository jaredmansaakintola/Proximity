import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';
import { ListEmptyComponent } from '../../../layout';
import UserCard from './UserCard';
import { AppContext } from '../../../context';

interface UserSearchResultsType {
  searchResults: any[]
};

const UserSearchResults: React.FC<UserSearchResultsType> = ({ searchResults }) => {
  const { userId } = useContext(AppContext);

  const filteredSearchResults = [...searchResults].filter(result => result.id !== userId);

  const renderItem = ({ item }) => {

    const { id, avatar, handle, name } = item;

    return (
      <UserCard
        userId={id}
        avatar={avatar}
        handle={handle}
        name={name}
      />
    );
  };

  return (
    <FlatGrid
      itemDimension={responsiveWidth(85)}
      showsVerticalScrollIndicator={false}
      items={filteredSearchResults}
      ListEmptyComponent={() => <ListEmptyComponent placeholder='No users found' spacing={60} />}
      style={styles.container}
      spacing={20}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100)
  }
});

export default UserSearchResults;