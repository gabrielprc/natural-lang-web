import prose from 'prose-js';
import pseudo from 'pseudo-js';
import { natural } from '../utils/examples';

const translate = (req, res) => {
	var { text } = req.body;
	res.send(buildTranslation(text));
};

// Remove this later
const getExample = (req, res) => {
	res.send(buildTranslation(natural.toString()));
};

function buildTranslation(text) {
	var pseudocode = prose.compileToPseudocode(text);
	var javascript = pseudo.compileToJS(pseudocode);

	return { pseudocode, javascript }
}

export default { translate, getExample };