import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  Modal,
} from 'react-native';
import styles from './style';
import CategoryCard from '../CategoryCard';
import CategoryModal from './components/CategoryModal';
import { noop } from '../../utils/common';

class CategoriesView extends React.Component {
  render() {
    const { categories } = this.props;
    const categoryCards = categories.map(({ categoryName, quote }) => (
      <CategoryCard
        categoryName={categoryName}
        quote={quote}
        key={categoryName}
        onClick={this.props.onCardClick(categoryName)}
        onDelete={this.props.deleteCategory(categoryName)}
        onEdit={this.props.setModal(categoryName, quote)}
      />
    ));
    return (
      <View style={styles.container}>
        {
          this.props.createMode
          && (
          <Modal
            transparent
            onRequestClose={this.props.toggleCreateMode}
            animationType="slide"
          >
            <CategoryModal onSubmit={this.props.addCategory} />
          </Modal>
          )
        }
        {
          this.props.modalContent.name
          && (
          <Modal
            transparent
            onRequestClose={this.props.setModal(null, null)}
            animationType="slide"
          >
            <CategoryModal
              onSubmit={this.props.editCategory(this.props.modalContent.name,
                this.props.modalContent.quote)}
              modalContent={this.props.modalContent}
            />
          </Modal>
          )
        }
        <View style={styles.sliderView}>
          <ScrollView
            pagingEnabled
            horizontal
            style={styles.scrollView}
          >
            {categoryCards}
          </ScrollView>
        </View>
        <Text style={styles.footer}>
            Report bugs or contribute to this project on
          {' '}
          <Text style={styles.link} onPress={this.props.openLink}>
            github
          </Text>
        </Text>
      </View>
    );
  }
}
CategoriesView.defaultProps = {
  categories: [
    { categoryName: 'Documents', quote: 'quote1' },
    { categoryName: 'Medication', quote: 'quote2' },
    { categoryName: 'Apparel', quote: 'quote3' },
    { categoryName: 'Electronics', quote: 'quote4' },
    { categoryName: 'Toiletries', quote: 'quote5' },
    { categoryName: 'Kitchenware', quote: 'quote6' },
    { categoryName: 'Food Items', quote: 'quote4' },
    { categoryName: 'Stationery', quote: 'quote5' },
    { categoryName: 'Misc', quote: 'quote6' },
  ],
  onCardClick: noop,
  modalContent: {},
  addCategory: noop,
  deleteCategory: noop,
  editCategory: noop,
  setModal: noop,
  toggleCreateMode: noop,
  createMode: false,
  openLink: noop,
};
CategoriesView.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onCardClick: PropTypes.func,
  modalContent: PropTypes.object,
  addCategory: PropTypes.func,
  deleteCategory: PropTypes.func,
  editCategory: PropTypes.func,
  setModal: PropTypes.func,
  toggleCreateMode: PropTypes.func,
  createMode: PropTypes.bool,
  openLink: PropTypes.func,
};
export default CategoriesView;
