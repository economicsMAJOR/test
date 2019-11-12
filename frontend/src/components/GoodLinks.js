import React ,{ Component }  from 'react';
import { Link } from 'react-router';
import './PostLinks.css';


class GoodLinks extends Component {
    state = {
        goods: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:9000/api/good');
            const goods = await res.json();
            this.setState({
                goods
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.goods.map(item => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <img src={item.photo1}/>
                        <img src={item.photo2}/>
                        <span>{item.price}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default GoodLinks;
