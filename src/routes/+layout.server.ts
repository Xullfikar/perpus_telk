import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({locals}) => {
    const { user } = await locals.validateUser();
    
    if(user){
        const userDetail = await prisma.user.findUnique({
            where: {
                id: user.userId
            }
        })
        return{userDetail};
    }
};