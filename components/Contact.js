var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render() {
		return (
			React.createElement('div', {
					className: 'contactItem'
				},
				React.createElement('img', {
					className: 'contactImage', 
					src: 'https://www.freeiconspng.com/uploads/address-book-icon--mono-business-icons-2--softiconsm-7.png'
				}),
				React.createElement('p', {
					className: 'contactLabel'
				}, 'Imie: ' + this.props.item.firstName),
				React.createElement('p', {
					className: 'contactLabel'
				}, 'Nazwisko: ' + this.props.item.lastName),
				React.createElement('a', {
					className: 'contactEmail', 
					href: 'mailto:' + this.props.item.email
				}, 'Email: ' + this.props.item.email)
			)
		)
	},
});