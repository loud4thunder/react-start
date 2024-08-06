import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        orders: [],
        currentItems: [],
        items: [
          {
            id: 1, 
            title: 'Стол',
            img: 'table.jpg',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            category: 'chairs', 
            price: '99.90'
          },
          {
            id: 2, 
            title: 'Стул',
            img: 'chair.jpg',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            category: 'chairs', 
            price: '59.9'
          },
          {
            id: 3, 
            title: 'Кухонный стол',
            img: 'kitchen_table.jpg',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            category: 'tables', 
            price: '48.9'
          },
          {
            id: 4, 
            title: 'Кухонный стул',
            img: 'kitchen_chair.jpg',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            category: 'chairs', 
            price: '39.9'
          },
          {
            id: 5, 
            title: 'Кофейный стол',
            img: 'coffee_table.jpg',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            category: 'tables', 
            price: '99.90'
          },
          {
            id: 6, 
            title: 'Стол компьютерный',
            img: 'comp_table.jpg',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            category: 'tables', 
            price: '119.9'
          }
        ],
        showFullItem: false,
        fullItem: {}
      }
      this.state.currentItems = this.state.items
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteOrder = this.deleteOrder.bind(this)
      this.chooseCategory = this.chooseCategory.bind(this)
      this.onShowItem = this.onShowItem.bind(this)
    }
    render(){
      return (
        <div className="wrapper">
            <Header orders={this.state.orders} onDelete={this.deleteOrder} />
            <Categories chooseCategory={this.chooseCategory} />
            <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

            {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
            <Footer />
        </div>
      )
    }

    onShowItem(item) {
      this.setState({fullItem: item})
      this.setState({ showFullItem: !this.state.showFullItem })
    }

    chooseCategory(category){
      if(category === 'all'){
        this.setState({currentItems: this.state.items})
        return
      }
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })
    }

    deleteOrder(id){
      this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item){
      let isInArray = false;
      this.state.orders.forEach(el => {
        if(el.id === item.id)
          isInArray = true
      })
      if(!isInArray)
        this.setState({ orders: [...this.state.orders, item] })
    }
}

export default App;
