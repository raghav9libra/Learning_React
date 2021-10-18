import * as React from "react";

export interface IAutoSuggestProps {
	suggestionsArray: Array<string>;
}

export interface IAutoSuggestState {
	showSuggestions: boolean;
	inputValue: string;
	suggestions: Array<string>;
	selectedFile: any;
}

export default class AutoSuggest extends React.Component<
	IAutoSuggestProps,
	IAutoSuggestState
> {
	constructor(props: IAutoSuggestProps) {
		super(props);

		this.state = {
			showSuggestions: false,
			inputValue: "",
			suggestions: [],
			selectedFile: null,
		};
	}
	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			this.setState({ selectedFile: e.target.files[0] });
			const img = URL.createObjectURL(e.target.files[0]);
			console.log(img);
		}

		// const val=URL.createObjectURL()
		// const blob=new Blob(e.target.value,)
		// const { value } = e.target;
		// if (value) {
		// 	const filtringFunction = (ele: string) => {
		// 		return ele.trim().toLowerCase().includes(value.trim().toLowerCase());
		// 	};
		// 	const filtered = this.props.suggestionsArray.filter(filtringFunction);
		// 	this.setState({
		// 		inputValue: value,
		// 		suggestions: filtered,
		// 		showSuggestions: true,
		// 	});
		// } else {
		// 	this.setState({ showSuggestions: false });
		// }
	};
	public render() {
		return (
			<div>
				<input type="file" onChange={(e) => this.handleChange(e)}></input>

				{/* {this.state.showSuggestions ? (
					this.state.suggestions.map((ele) => {
						return <p>{ele}</p>;
					})
				) : (
					<p>No Suggestions found</p>
				)} */}
			</div>
		);
	}
}
