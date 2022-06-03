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
    this.repository = factory.getUserRepository();
    this.repository = {
      getUserBy: jest.fn().mockResolvedValue(this.user)
    }
  })

  it('return status code 400 and already exist user', async () => {
    const response = await this.service.create(this.params.email)    
    
    expect(response.status).toEqual(409)
    expect(response.body.error).toEqual('already exists user with this email')
    // expect(this.repository.getUserBy).toHaveBeenCalledWith(this.params.email)
    
  })
})