const sinon = require('sinon');
const { expect } = require('chai')
const factory = require('../../../../src/domains/user/factories')
const { HttpStatusCode  } = require('./../../../../src/protocols/http');
const enumHelperUser = require('../../../../src/helpers/enumHelperUser');

describe('User Service', () => {
  beforeEach(() => {
    this.service = factory.getUserService();

    this.user = {
      id: 1,
      name: 'any_name',
      email: 'any_email',
      password: 'any_password',
      id_typeuser: 2,
		  is_active: true,
    }

    this.users = [
      {
        id: 1,
        name: 'any_name',
        email: 'any_email',
        password: 'any_password'
      },
      {
        id: 2,
        name: 'any_name',
        email: 'any_email',
        password: 'any_password'
      }
    ]

    this.params = {
      id: 1,
      name: 'any_name',
      email: 'any_email',
      password: 'any_password',      
    }

    this.newUser = {
      name: 'any_name',
      email: 'any_email',
      password: 'any_password',
      id_typeuser: 2,
		  is_active: true,
    }
    
    this.service.repository = {
      getUserBy: sinon.stub().resolves(this.user),
      create: sinon.stub().resolves(this.user),
      getById: sinon.stub().rejects(),
      getAllUser: sinon.stub().resolves(),
      update: sinon.stub().resolves()
    }
    
    this.service.generateHashPassword = sinon.stub().resolves('any_password')
  })

  describe('create', () => {
    it('return status code 409 and already exist user', async () => {
      const response = await this.service.create(this.params.email)   
      
      expect(response.status).to.eql(HttpStatusCode.Conflict)
      expect(response.body.error).to.eql(enumHelperUser.user.alreadyExists)
      sinon.assert.calledOnce(this.service.repository.getUserBy)
      sinon.assert.notCalled(this.service.repository.create)
      
      
    })
  
    it('return status code 409 when the getUserBy not return value', async () => {
      this.service.repository.getUserBy = sinon.stub().resolves();
      this.service.repository.create = sinon.stub().resolves();
      
      const response = await this.service.create(this.params)   
      
      expect(response.status).to.eql(HttpStatusCode.Conflict)
      expect(response.body.error).to.eql(enumHelperUser.user.errorToCreatedUser)
      sinon.assert.calledOnce(this.service.repository.getUserBy)
      sinon.assert.calledOnceWithExactly(this.service.repository.getUserBy, this.params.email)
      
      sinon.assert.calledOnce(this.service.repository.create)
      sinon.assert.calledOnceWithExactly(this.service.repository.create, this.newUser)
      
    })
  
    it('return status code 201 and create user', async() =>{
      this.service.repository.getUserBy = sinon.stub().resolves()
  
      const response = await this.service.create(this.params);
  
      expect(response.status).to.eql(HttpStatusCode.Created)
      expect(response.body.result).to.eql(this.user)
      sinon.assert.calledOnce(this.service.repository.getUserBy)
      sinon.assert.calledOnceWithExactly(this.service.repository.getUserBy, this.params.email)
      
      sinon.assert.calledOnce(this.service.repository.create)
      sinon.assert.calledOnceWithExactly(this.service.repository.create, this.newUser)
    })
  })

  describe('getById', () => {
    it('return status code 500 when getById fails', async () =>{
      const response = await this.service.getById(this.params.id);
      expect(response.status).to.eql(HttpStatusCode.serverError)
    })

    it('return status code 404 when not found user', async () =>{
      this.service.repository.getById = sinon.stub().resolves()
      
      const response = await this.service.getById(this.params.id);

      expect(response.status).to.eql(HttpStatusCode.notFound)
      expect(response.body.result).to.eql(enumHelperUser.user.notFoundUser)
      sinon.assert.calledOnce(this.service.repository.getById)
      sinon.assert.calledOnceWithExactly(this.service.repository.getById, this.params.id)
    })

    it('return status code 200 when found user by id', async () =>{
      this.service.repository.getById = sinon.stub().resolves(this.user)
      
      const response = await this.service.getById(this.params.id);
      
      expect(response.status).to.eql(HttpStatusCode.OK)
      expect(response.body.result).to.eql(this.user)
      sinon.assert.calledOnce(this.service.repository.getById)
      sinon.assert.calledOnceWithExactly(this.service.repository.getById, this.params.id)
    })
  })

  describe('getAllUser', () => {
    it('return status code 404 when getAllUser not found user', async () =>{
      const response = await this.service.getAllUser();
      expect(response.status).to.eql(HttpStatusCode.notFound)
      expect(response.body.result).to.eql(enumHelperUser.user.notFoundUser)
      sinon.assert.calledOnce(this.service.repository.getAllUser)
    })

    it('return status code 200 and return all users', async () =>{
      this.service.repository.getAllUser = sinon.stub().resolves(this.users)
      const response = await this.service.getAllUser();

      expect(response.status).to.eql(HttpStatusCode.OK)
      sinon.assert.calledOnce(this.service.repository.getAllUser)
      expect(response.body.result).to.eql(this.users)
    })

    it('return status code 500 when getAllUser fails', async () =>{
      this.service.repository.getAllUser = sinon.stub().rejects()
      this.error = {
        error: 'Error'
      }
      
      const response = await this.service.getAllUser();
      
      expect(response.status).to.eql(HttpStatusCode.serverError)
      expect(response.body).to.eql(this.error)
      sinon.assert.calledOnce(this.service.repository.getAllUser)
    })
  })

  describe('update', () => {
    it('return status code 204 when update not found the user', async () => {
      const response = await this.service.update(this.user.id, this.params)

      expect(response.status).to.eql(HttpStatusCode.noContent)
      expect(response.body.result).to.eql(enumHelperUser.user.notFoundUser)
      sinon.assert.calledOnce(this.service.repository.update)
      sinon.assert.alwaysCalledWith(this.service.repository.update, this.user.id, this.params)

    })

    it('return status code 200 after update user', async () => {
      this.service.repository.update = sinon.stub().resolves(this.user)
      
      const response = await this.service.update(this.user.id, this.params)

      expect(response.status).to.eql(HttpStatusCode.OK)
      expect(response.body.result).to.eql(enumHelperUser.user.updateUser)
      sinon.assert.calledOnce(this.service.repository.update)
      sinon.assert.alwaysCalledWith(this.service.repository.update, this.user.id, this.params)
    })

    it('return status code 200 after update user', async () => {
      this.service.repository.update = sinon.stub().rejects()
      
      const response = await this.service.update(this.user.id, this.params)

      expect(response.status).to.eql(HttpStatusCode.serverError)
      expect(response.body.result).to.eql(enumHelperUser.user.updateUser)
    })
  })
  
})