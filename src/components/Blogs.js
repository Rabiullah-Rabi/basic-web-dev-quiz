import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto my-32'>
            <div className='text-left w-3/4 mx-auto mb-10'>
                <h1 className='text-2xl font-bold'>What is the purpose of React Router</h1>
                <p className='mt-4 ml-4'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    <br></br>
                There are 4 types of route components available with React Router:
                </p>
                <ul className='list-disc ml-10'>
                    <li>Route</li>
                    <li>Default Route</li>
                    <li>Not Found Route</li>
                    <li>Redirect Route</li>
                </ul>
                <p  className='mt-4 ml-4'>
                    <strong>Setting up the basics using npm:</strong>
                    <code>  $ npm install react-router --save </code>
                    <br></br>                   
                </p>
            </div>
            {/* ques 2 */}
            <div className='text-left w-3/4 mx-auto mb-10'>
                <h1 className='text-2xl font-bold'>How does context works</h1>
                <p className='mt-4 ml-4'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    <br></br>    
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state    
                </p>
            </div>

            {/* ques 2 */}
            <div className='text-left w-3/4 mx-auto mb-10'>
                <h1 className='text-2xl font-bold'>useRef Hook</h1>
                <p className='mt-4 ml-4'>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 
                    <br></br>
                    <strong>Syntax:</strong>
                    <code>  const refContainer = useRef(initialValue); </code>
                    <br></br>

                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.     
                </p>
            </div>
        </div>
    );
};

export default Blogs;