// import logo from './logo.svg';
// import './App.css';
import HeaderMenu from './components/HeaderMenu';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ScrollToTopOnMount,SectionsContainer, Section, Header, Footer} from 'react-fullpage';

class App extends Component {
    render() {
        // return (
        //     <div>
        //         <HeaderMenu/>
        //         {this.props.children}
        //     </div>
        //);
        
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        true,
    //   sectionPaddingTop:    '50px',
      sectionPaddingBottom: '-50px',
      arrowNavigation:      true
    };
 
    return (
      <div>
        <Header>
            <HeaderMenu/>
        </Header>
        {/* <Footer>
          <a href="">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a>
        </Footer> */}
        
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
          <Section color="#A7DBD8">
            <h3>Page 2</h3>
            <div
                style={{
                  overflow: "scroll",
                  height: 200,
                  backgroundColor: "#EEE"
                }}
              >
                <ul>
                  {Array(100)
                    .fill(1)
                    .map((_, index) => <li>{index}</li>)}
                </ul>
                PS: Once you edit code - this will be scrollable, but full page
                will die.
              </div>
          </Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  
    }
}

// export default App;


 
// const app = document.querySelector('#app');
 
// const App = React.createClass({
//   render() {
//     let options = {
//       sectionClassName:     'section',
//       anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
//       scrollBar:            false,
//       navigation:           true,
//       verticalAlign:        false,
//       sectionPaddingTop:    '50px',
//       sectionPaddingBottom: '50px',
//       arrowNavigation:      true
//     };
 
//     return (
//       <div>
//         <Header>
//           <a href="#sectionOne">Section One</a>
//           <a href="#sectionTwo">Section Two</a>
//           <a href="#sectionThree">Section Three</a>
//         </Header>
//         <Footer>
//           <a href="">Dcoumentation</a>
//           <a href="">Example Source</a>
//           <a href="">About</a>
//         </Footer>
//         <SectionsContainer className="container" {...options}>
//           <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
//           <Section color="#A7DBD8">Page 2</Section>
//           <Section color="#E0E4CC">Page 3</Section>
//         </SectionsContainer>
//       </div>
//     );
//   }
// });
 
// ReactDOM.render(<App/>, app);

export default App;