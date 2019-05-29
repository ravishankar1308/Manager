import React,{Component} from 'react';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import {connect} from 'react-redux';
import {emailChanged} from '../actions';

 class LoginForm extends Component {

    state = { email: '' };
    onEmailChange(text){
          this.props.emailChanged(text);
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    lable='Email'
                    placeholder='email@gmail.com'
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                    secureTextEntry
                    lable='Password'
                    placeholder='password'
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
 return {
    email:state.auth.email
 };
};

export default connect(mapStateToProps,{emailChanged}) (LoginForm);