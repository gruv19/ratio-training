const containerTemplate = (type) => (`<section class="container${type !== 'default' ? ` container--${type}` : ''}"></section>`);

export default containerTemplate;
