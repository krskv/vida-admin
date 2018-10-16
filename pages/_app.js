import "../styles/main.sass"
import React from 'react'
import App, { Container } from 'next/app'
import Loader from '../components/loader'
import {createStore} from "redux"
// import generalData from '../reducers'
// const store = createStore(generalData)

export default class MyApp extends App {

  constructor(props) {
    super(props);
    
    this.state = {loader: true};
  }

  static async getInitialProps({ Component, router, ctx }) {    

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { 
      pageProps
    }
  }

  componentDidMount(){
    this.setState({ loader: false });
  }

  render () {    
    const { Component, pageProps } = this.props

    return (
      <Container>
        { this.state.loader && <Loader /> }
        <Component {...pageProps} />
      </Container>
    )
  }
}