import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

class CategoryCard extends React.Component {
  render() {
    const { categoryName, quote } = this.props;
    return (
      <TouchableOpacity onPress={this.props.onClick}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.cardText}>
              {categoryName}
            </Text>
          </View>
          <View style={styles.quote}>
            <Text style={styles.quoteText}>
              {`--${quote}`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
CategoryCard.defaultProps = {
  categoryName: 'Category1',
  quote: 'quote1',
  onClick: () => {},
};
CategoryCard.propTypes = {
  categoryName: PropTypes.string,
  quote: PropTypes.string,
  onClick: PropTypes.func,
};
export default CategoryCard;
