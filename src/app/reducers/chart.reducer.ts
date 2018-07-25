import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: (chart: any) => chart._id
});

export interface State extends EntityState<any> {
}

