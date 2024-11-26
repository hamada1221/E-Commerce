import { useMutation, useQueryClient } from "@tanstack/react-query";

function useMutationCart(fn) {

    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: fn,
        onSuccess: ()=>{
            queryClient.invalidateQueries({ queryKey: ['getCart'] })}
    })
}

export default useMutationCart;