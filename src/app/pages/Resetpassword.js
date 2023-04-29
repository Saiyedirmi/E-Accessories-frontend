import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'

const Resetpassword = () => {
  return (
    <>
    <Meta title={"Reset Password"} />
    <BreadCrumb title="Reset Password" />
    <Container class1="login-wrapper py-5 home-wrapper-2">
     
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Reset Password</h3>
                        <form action="" className="d-flex flex-column gap-20">
                            <CustomInput type="password" name="password" placeholder="Password"  />
                            <CustomInput type="password" name="password" placeholder=" Confirm Password"  /> 
                            
                            <div>

                                <div className="mt-3 d-flex gap-15 justify-content-center align-items-center">
                                    <button className="button border-0 " type="submit">OK</button>
                                    
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            </Container>
     
    </>
  )
}

export default Resetpassword