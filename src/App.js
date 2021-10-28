import logo from "./logo.svg";
import "./App.css";
import NameDisplay from "./components/nameDIsplay";
import FuncComponent from "./components/funcComp";
import StateConcept from "./components/stateConcept";
import FormConcept from "./components/formConcept";
import ImpureComp from "./components/pureVSimpure/pureComponents";
import Purecomp from "./components/pureVSimpure/pureComp";
import UseStateHook from "./components/useStateHook/useStateHook";
import UseRefHook from "./components/useRefHook/useRefHook";
import DynamicForm from "./components/DynamicForm/dynamicForm";
import UseMemoHook from "./components/useMemoHook/useMemoHook";
import UseCallBackHook from "./components/useCallBackHook/useCallBackHook";
import SlideShow from "./components/slideShow/slideShow";
import Counter from "./components/counter/counter";
import UserTS from "./components/tsConcepts/user";
import Container from "./components/learningClassBased/container";
import AutoSuggest from "./components/autosuggest/Autosuggest";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App(props) {
	return (
		<div className="App">
			<ErrorBoundary>
				<h1>Test app react</h1>
				{/* <DynamicForm /> */}
				{/* <UseMemoHook /> */}
				{/* <UseCallBackHook /> */}
				{/* <SlideShow /> */}
				{/* <Counter /> */}
				{/* <UserTS heading="my title" extraText={55} /> */}
				{/* <Container /> */}
				<FormConcept />
				{/* <AutoSuggest suggestionsArray={["dog", "cat", "lion", "rabbit"]} /> */}
			</ErrorBoundary>
		</div>
	);
}

export default App;
