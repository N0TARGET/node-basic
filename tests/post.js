const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

const server = require('../src/index');
const db = require('../src/models');

chai.use(chaiHttp);

describe('POSTS', () => {

    describe('GET /api/v0.1/posts', () => {
        beforeEach(() => {
            db.Post.destroy({where: {}});
        })

        it('should return empty array', async () => {
            chai.request(server)
                .get('/api/v0.1/posts')
                .end((err, res) => {
                    const {status, body} = res;
                    expect(status).to.be.eq(200);
                    expect(body).to.be.empty;
                })
        })

        it('should return one item', async () => {
            const post = {
                title: 'Title',
                author: 'John Doe',
                description: 'Some description'
            }
            db.Post.create(post);

            chai.request(server)
                .get('/api/v0.1/posts')
                .end((err, result) => {
                    const {body, status} = result;
                    expect(body).to.have.lengthOf(1);
                    expect(body[0]).to.eql(post);
                })
        })

    })

    describe('DELETE', () => {

        it('should remove one item by id',  async () => {

            const postId = 100;
            const post = {
                id: postId,
                title: 'Title',
                author: 'John Doe',
                description: 'Some description'
            }
            await db.Post.create(post);
            let savedPost = await db.Post.findByPk(postId);

            expect(savedPost.id).to.eql(postId)

            chai.request(server)
                .delete('/api/v0.1/posts/' + postId)
                .end((err, result) => {
                    const {body, status} = result;
                    expect(Number(body.id)).to.eql(postId);
                })
        })

    })
})