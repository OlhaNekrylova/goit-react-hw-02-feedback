class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render () {
    return (
      <>
      
        <Section className="sectionStatistics"></Section>
      </>
      
    )
  };
};

export default App;



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
