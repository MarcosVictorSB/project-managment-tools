const sinon = require('sinon');
const { expect } = require('chai')
const factory = require('../../../../src/domains/user/factories')

describe('User Service', () => {
  beforeEach(() => {
    this.service = factory.getUserService();

    this.user = {
      email: 'any_email'
    }
    this.params = {
      email: 'any_email'
    }
    
    this.service.repository = {
      getUserBy: sinon.stub().resolves(this.user)
    } 
  })

  it('return status code 409 and already exist user', async () => {
    const response = await this.service.create(this.params.email)   
    
    expect(response.status).to.eql(409)
    expect(response.body.error).to.eql('already exists user with this email')
    sinon.assert.calledOnce(this.service.repository.getUserBy)
    sinon.assert.calledOnceWithExactly(this.service.repository.getUserBy, this.params.email)
    
  })
})