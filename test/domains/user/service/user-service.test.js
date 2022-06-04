const sinon = require('sinon');
const { expect } = require('chai')
const factory = require('../../../../src/domains/user/factories')
const { HttpStatusCode  } = require('./../../../../src/protocols/http');
const enumsHelpesUser = require('../../../../src/helpers/enumsHelpersUser');

describe('User Service', () => {
  beforeEach(() => {
    this.service = factory.getUserService();

    this.user = {
      name: 'any_name',
      email: 'any_email',
      password: 'any_password'
    }

    this.params = {
      name: 'any_name',
      email: 'any_email',
      password: 'any_password'
    }
    
    this.service.repository = {
      getUserBy: sinon.stub().resolves(this.user),
      create: sinon.stub().resolves(this.user)
    } 
  })

  it('return status code 409 and already exist user', async () => {
    const response = await this.service.create(this.params.email)   
    
    expect(response.status).to.eql(HttpStatusCode.Conflict)
    expect(response.body.error).to.eql(enumsHelpesUser.user.alreadyExists)
    sinon.assert.calledOnce(this.service.repository.getUserBy)
    
  })

  it('return status code 409 when the repository create fails', async () => {
    this.service.repository.getUserBy = sinon.stub().resolves(undefined);
    this.service.repository.create = sinon.stub().resolves(undefined);
    
    const response = await this.service.create(this.params)   
    
    expect(response.status).to.eql(HttpStatusCode.Conflict)
    expect(response.body.error).to.eql(enumsHelpesUser.user.errorToCreatedUser)
    sinon.assert.calledOnce(this.service.repository.getUserBy)
    sinon.assert.calledOnceWithExactly(this.service.repository.getUserBy, this.params.email)
    
    sinon.assert.calledOnce(this.service.repository.create)
    sinon.assert.calledOnceWithExactly(this.service.repository.create, this.params)
    
  })

  it('return status code 201 and create user', async() =>{
    this.service.repository.getUserBy = sinon.stub().resolves()

    const response = await this.service.create(this.params);

    expect(response.status).to.eql(HttpStatusCode.Created)
    expect(response.body.result).to.eql(this.user)
    sinon.assert.calledOnce(this.service.repository.getUserBy)
    sinon.assert.calledOnceWithExactly(this.service.repository.getUserBy, this.params.email)
    
    sinon.assert.calledOnce(this.service.repository.create)
    sinon.assert.calledOnceWithExactly(this.service.repository.create, this.params)
  })
})