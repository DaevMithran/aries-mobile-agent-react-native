import { initializeStore, agentSlice, connectionsSlice, AgentThunks, ConnectionThunks } from './src'
import { createAgent } from './agent-test'


const run = async () => {
    const agent = await createAgent()
    const { store } = initializeStore(
        agent
    )

    await store.dispatch(AgentThunks.initializeAgent())
    await store.dispatch(ConnectionThunks.fetchAllConnections())
    console.log(store.getState())
}

run()
