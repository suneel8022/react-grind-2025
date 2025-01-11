import PropTypes from 'prop-types'

function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                                            {item.name}
                                                            :&nbsp; <b>{item.calories}</b></li>);

    return(
        <>
        <h3>{category}</h3>
    <ol>{listItems}</ol>
        </>
);   
}

        List.propTypes={
            category : PropTypes.string,
            items: PropTypes.arrayOf({  id: PropTypes.number,
                                        name: PropTypes.string,
                                        calories: PropTypes.number})
        }

export default List