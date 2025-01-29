import React, { Component, ReactElement } from 'react'
import ErrorDefault from './defaultErrorUI';

interface IProps{
    children : ReactElement;
    fallback? : ReactElement;
    useDefaultFallback: boolean;
}
interface IState {
    hasError: boolean;
    errorMsg: string;
}

export default class ErrorBounday extends Component<IProps, IState> {

    constructor(props:IProps){
        super(props)
        this.state={
            hasError : false,
            errorMsg : ""
        }
    }
    getDerivedStateFromError(){
        return{
            hasError:true
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      
        this.setState({
            errorMsg:errorInfo.componentStack ?? "",
            hasError : true
        })
    }

  render() {
   
    if(this.state.hasError){
        return <div className='pt-20'>{this.props.useDefaultFallback ? <ErrorDefault /> : this.props.fallback}</div>
    }
    return (
      this.props.children
    )
  }
}
