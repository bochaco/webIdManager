import webIdsReducer, { initialState } from 'reducers/webIds_reducer';
import { TYPES } from 'actions/webIds_actions';


describe( 'webIds reducer', () =>
{
    it( 'should return the initial state', () =>
    {
        expect( webIdsReducer( undefined, {} ) ).toEqual( initialState );
    } );

    describe( 'ADD_WEB_ID', () =>
    {
        it( 'should handle adding a webId', () =>
        {
            const payload = { name: 'testttyyy' };
            expect( webIdsReducer( {}, {
                type : TYPES.ADD_WEB_ID,
                payload
            } )[0] ).toMatchObject( payload );
        } );

        it( 'should handle adding multiple webIds', () =>
        {
            const payload = { name: 'testttyyy' };
            const payload2 = { name: 'two' };

            const state = webIdsReducer( [], {
                type : TYPES.ADD_WEB_ID,
                payload
            } );

            const state2 = webIdsReducer( state, {
                type    : TYPES.ADD_WEB_ID,
                payload : payload2
            } );

            expect( state2 ).toEqual( [payload, payload2] );
        } );
    } );


    describe( 'UPDATE_WEB_ID', () =>
    {
        it( 'should handle updating a webId', () =>
        {
            const updatedPayload = { name: 'nottestttyyy', id: 1, email: 'here' };
            const updatedState = webIdsReducer( [{ name: 'something', id: 2 }, { name: 'testttyyy', id: 1 }], {
                type    : TYPES.UPDATE_WEB_ID,
                payload : updatedPayload
            } );

            expect( updatedState[1].name ).toEqual( updatedPayload.name );
            expect( updatedState[1].email ).toEqual( updatedPayload.email );
        } );
    } );
} );
